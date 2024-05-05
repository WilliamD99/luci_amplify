"use client";

import { uploadData } from "aws-amplify/storage";
import React, { useState } from "react";

export default function UploadFile() {
  const [file, setFile] = useState<File | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        let test = await uploadData({
          path: `avatar/123/${file.name}`,
          data: file,
          options: {
            onProgress: ({ totalBytes, transferredBytes }) => {
              if (totalBytes) {
                console.log(Math.round(transferredBytes / totalBytes) * 100);
              }
            },
          },
        }).result;
        console.log(test);
      } catch (e) {
        console.log(e, "error");
      }
    }
  };

  return (
    <>
      <div>
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Submit</button>
      </div>
    </>
  );
}
