import React, { useCallback, useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  FriendListType,
  getCurrentUserData,
  getFriendList,
} from "@/utils/amplify-utils.client";
import { Schema } from "../../../../amplify/data/resource";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { useQuery } from "@tanstack/react-query";

export default function UserSelect() {
  const [avlbMembers, setAvlbMembers] = useState<FriendListType[] | false>([]);
  const [selectedMembers, setSelectedMembers] = useState<FriendListType[]>([]);

  const { data: userData } = useQuery<Schema["User"]["type"] | null>({
    queryKey: ["current-user"],
    queryFn: () => getCurrentUserData(),
  });

  const { data: friendList } = useQuery({
    queryKey: ["friendlist", userData?.id],
    queryFn: () => getFriendList(),
    enabled: userData?.id ? true : false,
  });

  useEffect(() => {
    if (friendList) {
      setAvlbMembers(friendList);
    }
  }, []);

  const handleSelectMember = useCallback(
    (user: FriendListType) => {
      let isSelected = selectedMembers.some((member) => member.id === user.id);
      if (!isSelected) {
        if (avlbMembers) {
          setAvlbMembers(avlbMembers.filter((member) => member.id !== user.id));
          setSelectedMembers([...selectedMembers, user]);
        }
      } else {
        if (avlbMembers) {
          setSelectedMembers(
            selectedMembers.filter((member) => member.id !== user.id)
          );
          setAvlbMembers([...avlbMembers, user]);
        }
      }
    },
    [selectedMembers, avlbMembers]
  );

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
            {avlbMembers &&
              avlbMembers.length > 0 &&
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
            {selectedMembers &&
              selectedMembers.length > 0 &&
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
