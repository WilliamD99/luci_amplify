"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProfileDrawer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const isOpen = searchParams.get("profile") === "edit";
  const [open, setOpen] = useState<boolean>(isOpen);

  const handleClose = (e: any) => {
    setOpen(e);
  };

  return (
    <>
      <Drawer open={isOpen} onOpenChange={handleClose}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
