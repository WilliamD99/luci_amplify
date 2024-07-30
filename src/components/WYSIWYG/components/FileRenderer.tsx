"use client";

import { StorageImage } from "@aws-amplify/ui-react-storage";
import React, { useContext, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ZoomModalContext } from "..";

const parseFileString = (files: string | any): any | null => {
  if (typeof files !== "string") {
    console.error("Input is not a string");
    return null; // or handle the error as needed
  }

  try {
    return JSON.parse(files);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null; // or handle the error as needed
  }
};

export default function FileRenderer({ files }: { files: string }) {
  const [collapse, setCollapse] = useState<boolean>(false);
  const { setOpenZoomModal, setSrc } = useContext(ZoomModalContext);

  let parsedFiles = JSON.parse(files);
  if (parsedFiles.length === 0) return <></>;

  return (
    <>
      <div className="file-wrapper space-y-2 w-full">
        <div className="flex flex-row space-x-1">
          <p className="text-xs text-gray-400">
            {parsedFiles?.length} {parsedFiles?.length > 1 ? "files" : "file"}
          </p>
          <button
            className={`${collapse ? "active" : ""} text-gray-400`}
            onClick={() => setCollapse(!collapse)}
            type="button"
          >
            <ChevronDownIcon className="h-3 w-3 text-white" />
          </button>
        </div>

        <div className={`grid grid-cols-5 gap-3 ${collapse ? "hidden" : ""}`}>
          {parsedFiles &&
            parsedFiles.map((item: { path: string; index: number }) => (
              <button
                className="cursor-zoom-in col-span-1"
                type="button"
                onClick={() => {
                  setOpenZoomModal(true);
                  setSrc(item);
                }}
                key={item.path}
              >
                <StorageImage
                  className="h-full w-full object-cover"
                  key={item.path}
                  path={item.path}
                  alt={item.path}
                />
              </button>
            ))}
        </div>
      </div>
    </>
  );
}
