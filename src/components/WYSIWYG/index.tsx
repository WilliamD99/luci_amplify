"use client";

import React, { useState, createContext } from "react";
import { EditorRoot } from "novel";
import Form from "./components/Form";
import ImageZoomModal from "../modals/ImageZoomModal";

interface ZoomModalType {
  openZoomModal: boolean;
  setOpenZoomModal: Function;
  src: string | null;
  setSrc: Function;
}

export const ZoomModalContext = createContext<ZoomModalType>({
  openZoomModal: false,
  setOpenZoomModal: () => null,
  src: null,
  setSrc: () => null,
});

export default function WYSIWYG() {
  const [openZoomModal, setOpenZoomModal] = useState<boolean>(false);
  const [zoomModalSrc, setZoomModalSrc] = useState<string | null>(null);

  return (
    <>
      <EditorRoot>
        <ZoomModalContext.Provider
          value={{
            openZoomModal,
            setOpenZoomModal,
            src: zoomModalSrc,
            setSrc: setZoomModalSrc,
          }}
        >
          <Form />
        </ZoomModalContext.Provider>
      </EditorRoot>
      <ImageZoomModal
        open={openZoomModal}
        setOpen={setOpenZoomModal}
        src={zoomModalSrc}
      />
    </>
  );
}
