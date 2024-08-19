"use client";

import React, { useEffect, useState, useTransition } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Hub } from "aws-amplify/utils";
// import { isAuthenticated } from "@/utils/amplify-utils";

export default function NavBar() {
  // const userId = await isAuthenticated();
  const router = useRouter();

  // const [authCheck, setAuthCheck] = useState();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const hubListenerCancel = Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signedIn":
          // setAuthCheck(true);
          startTransition(() => router.push("/"));
          startTransition(() => router.refresh());

          break;
        case "signedOut":
          // setAuthCheck(false);
          startTransition(() => router.push("/"));
          startTransition(() => router.refresh());

          break;
      }
    });

    return () => hubListenerCancel();
  }, [router]);

  return (
    <>
      <div className="top">
        <p className="font-bold text-xl">LuciTalk</p>
        <button className="top__cta">
          <QuestionMarkCircleIcon className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
