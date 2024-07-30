"use client";

import React from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { Tabs } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";

export default function PanelLayout({
  children,
  defaultLayout = [20, 80],
}: {
  children: React.ReactNode[];
  defaultLayout: number[] | undefined;
}) {
  const searchParams = useSearchParams();
  const tabOption = searchParams.get("tab") ?? "dms";

  const onLayout = (sizes: number[]) => {
    document.cookie = `panel-layout=${JSON.stringify(sizes)}`;
  };

  return (
    <>
      <Tabs className="h-full w-full" id="test" value={tabOption}>
        <PanelGroup direction="horizontal" onLayout={onLayout}>
          <Panel
            className="app_workspace--layout__left"
            defaultSize={defaultLayout[0]}
            maxSize={30}
            minSize={20}
          >
            {children[0]}
          </Panel>
          <Panel
            className="app_workspace--layout__right h-full relative"
            defaultSize={defaultLayout[1]}
          >
            <PanelResizeHandle className="w-[1px] h-full resize-handler" />

            {children[1]}
          </Panel>
        </PanelGroup>
      </Tabs>
    </>
  );
}
