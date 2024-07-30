"use client";

import React, { useEffect, useState } from "react";
import { Toaster } from "../ui/toaster";
import { useToast } from "../ui/use-toast";
import { databaseClient, getNotifications } from "@/utils/amplify-utils.client";
import { BellIcon } from "@heroicons/react/24/outline";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ActivityList from "./ActivityList";

export interface ActivityListResult {
  id: string;
  type: string;
  table: string;
  status: string;
  idSource: string;
  createdAt: string;
  belongsTo: {
    email: string;
    username: string;
    id: string;
  };
}

export interface ActivityListProps {
  data: ActivityListResult[];
}

export default function Notification() {
  let [notifications, setNotifications] = useState<ActivityListProps["data"]>(
    []
  );
  const { toast } = useToast();

  // Subscribe to notification
  useEffect(() => {
    const notificationSub =
      databaseClient.models.NotificationCenter.onCreate().subscribe({
        next: async (data) => {
          toast({
            title: `You have a new notification`,
            description: `New ${data.type}`,
          });
          let userSourceData = await data.belongsTo();
          let newNotification = {
            id: data.id,
            type: data.type,
            createdAt: data.createdAt,
            idSource: data.idSource,
            table: data.table,
            status: data.status,
            belongsTo: {
              id: userSourceData.data?.id ?? "",
              email: userSourceData.data?.email ?? "",
              username: userSourceData.data?.username ?? "",
            },
          };
          setNotifications((prev) => [...prev, newNotification]);
        },
        error: (error) => {
          console.log(error);
        },
      });
    return () => notificationSub.unsubscribe();
  }, []);

  useEffect(() => {
    getNotifications(10)
      .then((res: any) => {
        setNotifications(res.data);
      })
      .catch((e) =>
        toast({
          title: "Error",
          description:
            "Something went wrong, please try again or contact support.",
        })
      );
  }, []);

  return (
    <>
      <Popover>
        <PopoverTrigger id="notification_trigger" asChild>
          <div className="menu cursor-pointer">
            <div className="relative menu_icon w-full h-full flex justify-center p-2">
              <BellIcon className="h-5 w-5 icon text-white" />
              <div className="absolute right-0 top-0 text-xs bg-red-500 px-1 rounded-full text-white">
                {notifications &&
                  notifications.length > 0 &&
                  notifications.length}
              </div>
            </div>
            <span className="menu_text">Activity</span>
          </div>
        </PopoverTrigger>
        <PopoverContent id="notification_content" side="right" className="p-2">
          <div className="grid gap-2 py-4 px-2">
            <div className="pb-2">
              <p className="font-medium leading-none">Activity</p>
            </div>
            <span className="h-[1px] border-t-[1px] border-gray-600" />
            {notifications && (
              <ActivityList list={notifications} setList={setNotifications} />
            )}
          </div>
        </PopoverContent>
      </Popover>

      <Toaster />
    </>
  );
}
