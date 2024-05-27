import React, { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { databaseClient } from "@/utils/amplify-utils.client";
import { Schema } from "../../../../amplify/data/resource";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { StorageImage } from "@aws-amplify/ui-react-storage";

export default function UserSelect() {
  const [avlbMembers, setAvlbMembers] = useState<Schema["User"]["type"][]>([]);
  const [selectedMembers, setSelectedMembers] = useState<
    Schema["User"]["type"][]
  >([]);

  useEffect(() => {
    databaseClient.models.User.list().then((res) => {
      console.log(res.data);
      setAvlbMembers(res.data);
    });
  }, []);

  const handleSelectMember = (user: Schema["User"]["type"]) => {
    console.log(user);
    let isSelected = selectedMembers.some((member) => member.id === user.id);
    if (!isSelected) {
      setAvlbMembers(avlbMembers.filter((member) => member.id !== user.id));
      setSelectedMembers([...selectedMembers, user]);
    }
  };

  return (
    <>
      <Command className="input">
        <CommandInput
          className="cmd_input"
          placeholder="Type a command or search..."
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Friends">
            {avlbMembers.length > 0 &&
              avlbMembers.map((member) => (
                <CommandItem key={member.id} className="cmd_item-wrapper">
                  <button
                    type="button"
                    className="cmd_item w-full flex flex-row items-center cursor-pointer"
                    onClick={() => handleSelectMember(member)}
                  >
                    <Avatar className="mr-2">
                      {member.avatar ? (
                        <StorageImage
                          alt="user avatar"
                          path={member.avatar}
                          fallbackSrc="https://github.com/shadcn.png"
                        />
                      ) : (
                        <AvatarImage src="https://github.com/shadcn.png" />
                      )}
                    </Avatar>
                    <p>{member.username ?? member.email}</p>
                  </button>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Select members to add to this group">
            {selectedMembers.length > 0 &&
              selectedMembers.map((member) => (
                <CommandItem key={member.id} className="cmd_item-wrapper">
                  <button
                    type="button"
                    className="cmd_item w-full flex flex-row items-center cursor-pointer"
                    onClick={() => handleSelectMember(member)}
                  >
                    <Avatar className="mr-2">
                      {member.avatar ? (
                        <StorageImage
                          alt="user avatar"
                          path={member.avatar}
                          fallbackSrc="https://github.com/shadcn.png"
                        />
                      ) : (
                        <AvatarImage src="https://github.com/shadcn.png" />
                      )}
                    </Avatar>
                  </button>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}
