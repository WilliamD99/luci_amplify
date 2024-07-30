"use client";

import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import {
  XMarkIcon,
  ArrowPathIcon,
  PlusIcon,
  MinusIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import { Slider } from "@/components/ui/slider";
import { downloadData } from "aws-amplify/storage";

export default function ImageZoomModal({
  open,
  setOpen,
  src,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  src?: string | null;
}) {
  let [hoverState, setHoverState] = useState<boolean>(false);
  let [zoomValue, setZoomValue] = useState<number[]>([0]);

  const handleDownloadFile = async () => {
    if (src) {
      let res = await downloadData({
        path: src,
      }).result;
      try {
        let blob = await res.body.blob();
        let url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;

        let path = res.path.split("/");
        let fileName = path[path.length - 1];
        link.setAttribute("download", fileName);

        document.body.appendChild(link);
        link.click();
        // Clean up and remove the link
        link.parentNode?.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          id="image_zoom"
          onMouseEnter={() => setHoverState(true)}
          onMouseLeave={() => setHoverState(false)}
          className={`overflow-hidden ${hoverState && "active"}`}
        >
          <div className="image_zoom-header px-5 py-2 flex flex-row justify-between items-center backdrop-blur-md z-30 relative">
            <div className="image_zoom-header--info"></div>
            <div className="image_zoom-header--close">
              <button
                type="button"
                className="rounded-md hover:bg-black p-2 transition-colors"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
          {src && (
            <div className="h-full w-full relative flex justify-center z-20">
              <StorageImage
                id="image_zoom-img"
                path={src}
                alt="image"
                onClick={() =>
                  zoomValue[0] === 100 ? setZoomValue([0]) : setZoomValue([100])
                }
                className={`cursor-zoom-in`}
                style={{
                  transform: `scale(${1 + zoomValue[0] / 100})`,
                }}
              />
            </div>
          )}
          <div className="image_zoom-footer px-5 py-2 flex flex-row justify-between items-center backdrop-blur-md z-30 relative">
            <div className="image_zoom-footer--action flex flex-row space-x-2 items-center">
              <button
                type="button"
                className="rounded-md hover:bg-black p-2 transition-colors"
                onClick={() => setZoomValue([0])}
              >
                <ArrowPathIcon className="h-5 w-5 text-white" />
              </button>
              <div className="flex flex-row space-x-1 border-[1px] border-gray-600 rounded-md p-1">
                <button
                  type="button"
                  onClick={() =>
                    zoomValue[0] >= 10 && setZoomValue([zoomValue[0] - 10])
                  }
                >
                  <MinusIcon className="h-5 w-5 text-white" />
                </button>
                <Slider
                  className="w-20 slider"
                  defaultValue={[0]}
                  max={100}
                  step={1}
                  value={zoomValue}
                  onValueChange={(e) => setZoomValue(e)}
                />
                <button
                  type="button"
                  onClick={() =>
                    zoomValue[0] < 100 && setZoomValue([zoomValue[0] + 10])
                  }
                >
                  <PlusIcon className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
            <div className="image_zoom-footer--utils">
              <button
                type="button"
                className="rounded-md hover:bg-black p-2 transition-colors"
                onClick={handleDownloadFile}
              >
                <ArrowDownTrayIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
