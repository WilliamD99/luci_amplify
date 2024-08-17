import { updateUserAvatar } from "@/actions/userdata-action";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { useQueryClient } from "@tanstack/react-query";
import { uploadData } from "aws-amplify/storage";
import React, { ChangeEvent, useState } from "react";

export default function AvatarUpload({
  userId,
  path,
}: {
  userId: string;
  path?: string | null;
}) {
  const [imagePath, setImagePath] = useState<string | null | undefined>(path);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [uploadPercent, setUploadPercent] = useState<number>(0);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    if (e.target.files) {
      toast({
        title: "Uploading...",
        description: "Please wait while we're uploading your image",
      });
      let result = await uploadData({
        path: `avatar/${userId}/${e.target.files[0].name}`,
        data: e.target.files[0],
        options: {
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              setUploadPercent((transferredBytes / totalBytes) * 100);
            }
          },
        },
      }).result;
      if (result) {
        setImagePath(`avatar/${userId}/${e.target.files[0].name}`);

        let updateUserRes = await updateUserAvatar(
          userId,
          `avatar/${userId}/${e.target.files[0].name}`
        );

        if (updateUserRes) {
          toast({
            title: "Succeed",
            description: "Image uploaded successfully!",
            duration: 1,
          });
          queryClient.invalidateQueries({
            queryKey: ["current-user"],
          });
        } else {
          toast({
            title: "Fail to upload",
            description: "Something went wrong, please try again!",
            variant: "destructive",
            duration: 1,
          });
        }
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Avatar className="bg-white relative flex flex-col avatar w-56 h-56 rounded-sm">
        {imagePath ? (
          <StorageImage alt="user avatar" path={imagePath} />
        ) : (
          <AvatarFallback>CN</AvatarFallback>
        )}
      </Avatar>
      {uploadPercent > 0 && uploadPercent < 100 ? (
        <span
          className="h-3 z-50 -mt-3 border-t-2 border-green-400"
          style={{
            width: `${uploadPercent}%`,
          }}
        ></span>
      ) : (
        <></>
      )}
      <Input
        id="avatar"
        type="file"
        className="w-56"
        accept="image/png, image/gif, image/jpeg"
        onChange={handleUpload}
        disabled={isLoading}
      />
    </>
  );
}
