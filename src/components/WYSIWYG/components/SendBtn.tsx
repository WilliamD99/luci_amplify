import React, { useContext } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useEditor } from "novel";
import TurndownService from "turndown";
import { usePathname } from "next/navigation";
import { UserDataContext } from "@/app/dms/[id]/client";
import { filesContext } from "./EditorMain";
import { databaseClient } from "@/utils/amplify-utils.client";
import { convertDateTimezone } from "@/utils/utils";

export default function SendBtn({
  btnRef,
  cb,
}: {
  btnRef: React.RefObject<HTMLButtonElement>;
  cb?: (e: any, date: string) => void;
}) {
  const { editor } = useEditor();
  const { sender, relationshipId }: any = useContext(UserDataContext);
  const { files } = useContext(filesContext);
  const edtiorTextContent = editor?.getText();

  const pathname = usePathname();
  const id = pathname.split("/dms/")[1];

  const handleBtnClick = async () => {
    const htmlContent = editor?.getHTML();
    const turndownService = new TurndownService();
    turndownService.addRule("removeImages", {
      filter: "img",
      replacement: () => "",
    });
    const markdownContent = turndownService.turndown(htmlContent ?? "");

    const currentDate = new Date();
    // Save the date in the database using UTC Timezone
    const formattedISODate = currentDate.toISOString();

    let fileArr;
    if (files && files.length > 0) {
      fileArr = files.map((file) => file.path);
    }

    // // Send msg through PubSub
    if (sender.id !== id) {
      // Only send the message that is not from yourself
      databaseClient.mutations.publish({
        identifier: sender.id,
        receiver: id,
        content: markdownContent,
        files: JSON.stringify(files),
      });
    }
    // Save msg to dynamo
    try {
      await databaseClient.models.ChatMessage.create({
        content: markdownContent,
        identifier: sender.id,
        receiver: id,
        relationshipId: relationshipId,
        createdAt: formattedISODate,
        files: JSON.stringify(files),
      });
    } catch (e) {
      console.log(e);
    }

    if (cb) {
      cb(
        {
          identifier: sender.id,
          receiver: id,
          content: markdownContent,
          createdAt: formattedISODate,
          files: JSON.stringify(files),
        },
        convertDateTimezone()
      );
    }
    editor?.chain().setContent("").run();
  };

  return (
    <>
      <span className="absolute h-fit w-fit right-5 bottom-2">
        <button
          onClick={handleBtnClick}
          ref={btnRef}
          type="button"
          className={`text-white rounded-sm px-3 py-1 ${
            !(edtiorTextContent && edtiorTextContent !== "") && "disabled"
          }`}
          disabled={!(edtiorTextContent && edtiorTextContent !== "")}
        >
          <PlayIcon className="h-5 w-5" />
        </button>
      </span>
    </>
  );
}
