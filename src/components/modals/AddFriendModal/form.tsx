"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formAddFriendSchema } from "@/utils/form-schema";

import { Form, FormField, FormItem } from "@/components/ui/form";
import { DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button, SubmitBtn } from "@/components/ui/button";
import { addFriendAction } from "@/actions/userdata-action";
import { useToast } from "@/components/ui/use-toast";

export default function AddFriendForm({ cb }: { cb?: () => void }) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formAddFriendSchema>>({
    resolver: zodResolver(formAddFriendSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleAddFriendAction = async (e: FormData) => {
    let data = await addFriendAction(e);

    if (data) {
      let status = data.status;
      if (!status) {
        toast({
          title: "Error",
          description: data.message,
        });
      } else {
        toast({
          title: "Friend request sent",
          description:
            "We'll let you know when this user accepted your request.",
        });
      }
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
      });
    }

    if (cb) cb();
  };

  return (
    <>
      <Form {...form}>
        <form id="md_create-room-form" action={handleAddFriendAction}>
          <div className="flex flex-col space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="name">
                    <span className="text-xs">Email</span>
                  </Label>
                  <Input
                    className="input"
                    required
                    type="email"
                    placeholder="User email"
                    {...field}
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-row justify-end space-x-3 mt-5">
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
            <SubmitBtn>Add</SubmitBtn>
          </div>
        </form>
      </Form>
    </>
  );
}
