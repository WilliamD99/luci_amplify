import React, { useContext, useEffect } from "react";
import { NodeViewWrapper } from "@tiptap/react";
// import { remove } from "aws-amplify/storage";
import { filesContext } from "./EditorMain";

const StorageImageWrapper = (props: any) => {
  const { addFilesToChat }: any = useContext(filesContext);

  useEffect(() => {
    addFilesToChat(props.node.attrs.src);
  }, []);

  return (
    <>
      <NodeViewWrapper as={"div"}>
        <span className="image-node">{props.node.attrs.src}</span>
      </NodeViewWrapper>
    </>
  );
};

export default StorageImageWrapper;
