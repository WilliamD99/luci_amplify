import { StorageImage } from "@aws-amplify/ui-react-storage";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useCallback } from "react";
import { remove } from "aws-amplify/storage";

export default function FileItem({
  item,
  cb,
}: {
  item: {
    path: string;
    index: number;
  };
  cb: Function;
}) {
  const handleDelete = useCallback(async () => {
    if (cb) cb(item);
    try {
      await remove({
        path: item.path,
      });
    } catch (e) {
      console.log(e);
    }
  }, [item]);

  return (
    <>
      <div className="editor_btm--item rounded-md" onClick={handleDelete}>
        <StorageImage
          fallbackSrc=""
          path={item.path}
          alt="Test"
          className="rounded-md"
        />
        <div className="editor_btm--cta">
          <XMarkIcon className="h-3 w-3 text-black" />
        </div>
      </div>
    </>
  );
}
