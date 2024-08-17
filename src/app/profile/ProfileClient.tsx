"use client";

import React, { useState } from "react";
import { SubmitBtn } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { formEditProfileSchema } from "@/utils/form-schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { updateUserProfile } from "@/actions/userdata-action";
import AvatarUpload from "./AvatarUpload";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

export default function ProfileClient({
  userData,
}: {
  userData: {
    id: string;
    avatar?: string | null;
    email: string;
    username?: string | null;
    title?: string | null;
    fullname?: string | null;
  };
}) {
  const [input] = useState(userData);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const formAction = async (formData: FormData) => {
    let response = await updateUserProfile(formData);
    if (response) {
      queryClient.invalidateQueries({
        queryKey: ["current-user"],
      });

      toast({
        title: "Succeed!",
        description: "Your profile has been updated",
        duration: 1000,
      });
    }
  };

  const form = useForm<z.infer<typeof formEditProfileSchema>>({
    resolver: zodResolver(formEditProfileSchema),
    defaultValues: {
      email: input.email,
      username: input.username ?? "",
      fullname: input.fullname ?? "",
      title: input.title ?? "",
    },
  });

  return (
    <>
      <Form {...form}>
        <form action={formAction} className="mt-6 flex flex-col">
          <div className="flex flex-row space-x-20">
            {/* Input fields */}
            <div className="flex flex-col space-y-5 inputs">
              <div className="grid w-full max-w-sm items-center gap-2.5 input_container">
                <FormField
                  control={form.control}
                  name="email"
                  disabled
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="email">
                        <span>Email</span>
                      </Label>
                      <Input {...field} />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-2.5 input_container">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="fullname">
                        <span>Full name</span>
                      </Label>
                      <Input placeholder="Full name" {...field} />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-2.5 input_container">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="username">
                        <span>User name</span>
                      </Label>
                      <Input placeholder="User name" {...field} />
                    </FormItem>
                  )}
                />
                <p className="input_desc">
                  This could be your first name, or a nickname - however you'd
                  like people to refer to you.
                </p>
              </div>
              <div className="grid w-full max-w-sm items-center gap-2.5 input_container">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="title">
                        <span>Title</span>
                      </Label>
                      <Input placeholder="Title" {...field} />
                    </FormItem>
                  )}
                />
                <p className="input_desc">Let people know who you are :)</p>
              </div>
            </div>
            {/* Logo */}
            <div className="flex flex-col gap-2.5 justify-start profile_avatar">
              <Label htmlFor="avatar">
                <span>Profile photo</span>
              </Label>
              <AvatarUpload userId={userData.id} path={userData.avatar} />
            </div>
          </div>
          {/* CTA */}
          <div className="cta mt-10">
            <SubmitBtn className="save text-sm">Save Changes</SubmitBtn>
          </div>
        </form>
      </Form>
    </>
  );
}
