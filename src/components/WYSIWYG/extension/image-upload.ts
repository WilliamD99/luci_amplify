import { uploadData } from "aws-amplify/storage";
import { createImageUpload } from "novel/plugins";

const onUploadWrapper = (ownerId: string) => async (file: File) => {
  try {
    let data = await uploadData({
      path: `files/${ownerId}/${file.name}`,
      data: file,
      options: {
        onProgress: ({ totalBytes, transferredBytes }) => {
          if (totalBytes) {
            // console.log(Math.round(transferredBytes / totalBytes) * 100);
          }
        },
      },
    }).result;

    return data.path;
  } catch (e) {
    return e;
  }
};

export const uploadFnWrapper = (
  files: File[],
  view: any,
  pos: number,
  ownerId: string
) => {
  let onUpload = onUploadWrapper(ownerId);

  const uploadFnWithAdditionalData = createImageUpload({
    onUpload: onUpload,
    validateFn: (file) => {
      if (file.size / 1024 / 1024 > 10) {
        return false;
      }
      return true;
    },
  });

  for (let i = 0; i < files.length; i++) {
    try {
      uploadFnWithAdditionalData(files[i], view, pos);
    } catch (e) {
      console.log(e);
      return false;
    }
  }
};
