import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddFriendForm from "./form";

export default function AddFriendModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent id="md_create-room" className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              <span>Add friend</span>
            </DialogTitle>
            <DialogDescription>
              <span className="text-xs">
                Send a friend request using their email.
              </span>
            </DialogDescription>
          </DialogHeader>
          <AddFriendForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
