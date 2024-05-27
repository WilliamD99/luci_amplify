import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateRoomForm from "./form";

export default function CreateRoomModal({
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
              <span>Create a Room</span>
            </DialogTitle>
            <DialogDescription>
              <span className="text-xs">
                Anyone who has this link will be able to view this.
              </span>
            </DialogDescription>
          </DialogHeader>
          <CreateRoomForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
