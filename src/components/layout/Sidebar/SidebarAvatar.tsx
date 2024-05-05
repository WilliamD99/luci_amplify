import React, { useState } from "react";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";

export default function SidebarAvatar() {
  const [open, setOpen] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Popover open={open}>
        <PopoverTrigger onClick={handleOpen}>
          <Avatar className="sidebar--bot__avatar">
            <AvatarImage src="https://github.com/shadcn.png" />
            {/* <AvatarFallback>DF</AvatarFallback> */}
          </Avatar>
        </PopoverTrigger>
        <PopoverContent
          side="right"
          className="mb-10 sidebar--bot__popover bg-black"
        >
          <p>Tes</p>
          <p>Tes</p>
          <p>Tes</p>
          <p>Tes</p>
        </PopoverContent>
      </Popover>
    </>
  );
}
