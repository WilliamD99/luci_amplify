import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";

export default function SearchContent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickIcon = () => inputRef.current?.focus();

  return (
    <>
      <div className="relative h-full w-full">
        <Input
          ref={inputRef}
          className="h-8 dms_search"
          type="text"
          placeholder="Find a DM"
        />
        <MagnifyingGlassIcon
          onClick={handleClickIcon}
          className="h-4 w-4 cursor-pointer text-white absolute right-2 top-1/2 -translate-y-1/2"
        />
      </div>
    </>
  );
}
