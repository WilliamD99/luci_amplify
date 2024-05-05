"use client";

import React, { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { Button, Divider, Flex } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { Hub } from "aws-amplify/utils";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function NavBar({ isSignedIn }: { isSignedIn: boolean }) {
  const router = useRouter();

  const [authCheck, setAuthCheck] = useState(isSignedIn);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const hubListenerCancel = Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signedIn":
          setAuthCheck(true);
          startTransition(() => router.push("/"));
          startTransition(() => router.refresh());

          break;
        case "signedOut":
          setAuthCheck(false);
          startTransition(() => router.push("/"));
          startTransition(() => router.refresh());

          break;
      }
    });

    return () => hubListenerCancel();
  }, [router]);

  const signOutSignIn = async () => {
    if (authCheck) {
      await signOut();
    } else {
      router.push("/signin");
    }
  };

  const defaultRoutes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/add",
      label: "Add Title",
      loggedIn: true,
    },
  ];

  const routes = defaultRoutes.filter(
    (route) => route.loggedIn === authCheck || route.loggedIn === undefined
  );

  return (
    <>
      {/* <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={"1rem"}
      >
        <Flex as="nav" alignItems="center" gap="3rem" margin="0 2rem">
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              {route.label}
            </Link>
          ))}
        </Flex>
        <Button
          variation="primary"
          borderRadius="2rem"
          className="mr-4"
          onClick={signOutSignIn}
        >
          {authCheck ? "SignOut" : "Sign In"}
        </Button>
      </Flex>
      <Divider size="small" /> */}
      <div className="top">
        <p className="font-bold text-xl">LuciTalk</p>
        <button className="top__cta">
          <QuestionMarkCircleIcon className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
