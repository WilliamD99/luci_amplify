import React from "react";
import { Badge } from "@/components/ui/badge";
import { FaceSmileIcon } from "@heroicons/react/24/solid";

export default function EmoteList() {
  return (
    <>
      <div className="flex flex-row space-x-2 pt-1 emote-list">
        <Badge
          variant="outline"
          className="emote-item flex flex-row  justify-center items-center space-x-1"
        >
          <FaceSmileIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-xs">1</span>
        </Badge>
      </div>
    </>
  );
}
