import React, { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { confirmFriendRequestAction } from "@/actions/userdata-action";
import Link from "next/link";
import { toast } from "../ui/use-toast";
import { getNotificationsType } from "@/utils/amplify-utils.client";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function ActivityList({
  list,
  setList,
}: {
  list: getNotificationsType[];
  setList: Function;
}) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { user } = useAuthenticator((context) => [context.user]);
  const queryClient = useQueryClient();

  const handleItemAction = async (
    id: string,
    status: boolean = false,
    sourceId?: string
  ) => {
    setLoading(true);
    let data = await confirmFriendRequestAction(id, status, sourceId);
    if (!data) return;
    else {
      let status = data.status;
      if (status) {
        toast({
          title: "Succeed",
          description: data.message,
        });
      } else {
        toast({
          title: "Error",
          description: data.message,
        });
      }
    }

    // Need to invalidate friend list data to refresh it
    queryClient.invalidateQueries({
      queryKey: ["friendlist", user.userId],
    });

    // Need to remove the active notification after user has interacted with it
    let filteredList = list.filter((item) => item.id !== sourceId);
    setList(filteredList);
    setLoading(false);
  };

  return (
    <>
      <div id="activity_list" className="space-y-2 flex flex-col">
        {list.length > 0 ? (
          list.map((item, index) => (
            <React.Fragment key={item.id}>
              <ActivityItem
                item={item}
                handleFunc={handleItemAction}
                isLoading={isLoading}
              />
              {index >= 0 && list.length > 1 && (
                <span className="h-[1px] border-t-[1px] border-gray-600" />
              )}
            </React.Fragment>
          ))
        ) : (
          <>
            <p className="text-xs ">You're up to date, nothing here.</p>
          </>
        )}
      </div>
    </>
  );
}

function ActivityItem({
  item,
  handleFunc,
  isLoading,
}: {
  item: getNotificationsType;
  handleFunc: Function;
  isLoading: boolean;
}) {
  let displayName =
    item.belongsTo.username && item.belongsTo.username !== ""
      ? item.belongsTo.username
      : item.belongsTo.email;

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
            onClick={() => handleFunc(item.idSource, true, item.id)}
            disabled={isLoading}
          >
            <CheckIcon className="w-3 h-3 text-green-400" />
          </button>
          <button
            className="cta p-1 rounded-md"
            onClick={() => handleFunc(item.idSource, false, item.id)}
            disabled={isLoading}
          >
            <XMarkIcon className="w-3 h-3 text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
