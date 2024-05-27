"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormField, FormItem } from "@/components/ui/form";
import { formCreateRoomSchema } from "@/utils/form-schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button, SubmitBtn } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { createRoomAction } from "@/actions/room-action";
import UserSelect from "./UserSelect";

export default function CreateRoomForm() {
  const form = useForm<z.infer<typeof formCreateRoomSchema>>({
    resolver: zodResolver(formCreateRoomSchema),
  });

  return (
    <>
      <Form {...form}>
        <form id="md_create-room-form" action={createRoomAction}>
          <div className="flex flex-col space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="name">
                    <span className="text-xs">Room Name</span>
                  </Label>
                  <Input
                    className="input"
                    required
                    placeholder="Room name"
                    {...field}
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="members"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="members">
                    <span className="text-xs">Add members</span>
                  </Label>
                  <UserSelect />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-row justify-end space-x-3 mt-5">
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
            <SubmitBtn>Create</SubmitBtn>
          </div>
        </form>
      </Form>
    </>
  );
}
