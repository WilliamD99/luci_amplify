import React from "react";
import { ActivityListProps, ActivityListResult } from "./index";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { confirmFriendRequestAction } from "@/actions/userdata-action";
import Link from "next/link";

export default function ActivityList({
  list,
}: {
  list: ActivityListProps["data"];
}) {
  return (
    <>
      <div id="activity_list" className="space-y-2 flex flex-col">
        {list.map((item, index) => (
          <>
            <ActivityItem key={item.id} item={item} />
            {index >= 0 && list.length > 1 && (
              <span className="h-[1px] border-t-[1px] border-gray-600" />
            )}
          </>
        ))}
      </div>
    </>
  );
}

function ActivityItem({ item }: { item: ActivityListResult }) {
  let displayName =
    item.belongsTo.username && item.belongsTo.username !== ""
      ? item.belongsTo.username
      : item.belongsTo.email;

  const handleItemAction = async (
    id: string,
    status: boolean = false,
    sourceId?: string
  ) => {
    await confirmFriendRequestAction(id, status, sourceId);
  };

  return (
    <div className="flex flex-col space-y-1 item" key={item.id}>
      <p className="text-xs font-semibold">New {item.type}</p>
      <div className="flex flex-row justify-between items-center space-x-3">
        <Link href={`/user/${item.belongsTo.id}`} className="text-xs">
          {displayName ?? "No user info"}
        </Link>
        <div className="flex flex-row space-x-2 items-center">
          <button
            className="cta p-1 rounded-md"
            onClick={() => handleItemAction(item.idSource, true, item.id)}
          >
            <CheckIcon className="w-3 h-3 text-green-400" />
          </button>
          <button
            className="cta p-1 rounded-md"
            onClick={() => handleItemAction(item.idSource, false, item.id)}
          >
            <XMarkIcon className="w-3 h-3 text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
