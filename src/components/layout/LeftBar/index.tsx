import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import DmTabContent from "./DmTabContent";

export default function LeftBar() {
  return (
    <div className="leftbar">
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <DmTabContent />
    </div>
  );
}
