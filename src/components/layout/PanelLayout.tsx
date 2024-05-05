"use client";

import React from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import LeftBar from "./LeftBar";

export default function PanelLayout({
  children,
  defaultLayout = [20, 80],
}: {
  children: React.ReactNode[];
  defaultLayout: number[] | undefined;
}) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `panel-layout=${JSON.stringify(sizes)}`;
  };

  return (
    <>
      <PanelGroup direction="horizontal" onLayout={onLayout}>
        <Panel
          className="app_workspace--layout__left"
          defaultSize={defaultLayout[0]}
          maxSize={30}
        >
          {children[0]}
        </Panel>
        <PanelResizeHandle className="w-2 resize-handler" />
        <Panel
          className="app_workspace--layout__right"
          defaultSize={defaultLayout[1]}
        >
          {children[1]}
        </Panel>
      </PanelGroup>
    </>
  );
}
