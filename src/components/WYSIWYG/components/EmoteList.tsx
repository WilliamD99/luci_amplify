import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface EmoteType {
  content: string;
  createdAt: string;
  updatedAt?: string;
  id: string;
  messageId: string;
  users: any[];
}

export default function EmoteList({ emotes }: { emotes: EmoteType[] }) {
  return (
    <>
      <div className="flex flex-row space-x-3">
        {emotes &&
          emotes.map((emote: EmoteType) => (
            <EmoteItem key={emote.id} emote={emote} />
          ))}
      </div>
    </>
  );
}

let EmoteItem = ({
  emote,
}: {
  emote: {
    content: string;
    createdAt: string;
    updatedAt?: string;
    id: string;
    messageId: string;
    users: any[];
  };
}) => {
  let [emoteLength, setEmoteLength] = useState(emote.users.length);

  useEffect(() => {
    setEmoteLength(emote.users.length);
  }, [emote.users.length]);

  return (
    <>
      {emoteLength > 0 && (
        <div className="flex flex-row space-x-2 pt-1 emote-list">
          <Badge
            variant="outline"
            className="emote-item flex flex-row  justify-center items-center space-x-1"
          >
            <p className="w-4 h-4 text-yellow-400">{emote.content}</p>
            <span className="text-xs">{emoteLength}</span>
          </Badge>
        </div>
      )}
    </>
  );
};
