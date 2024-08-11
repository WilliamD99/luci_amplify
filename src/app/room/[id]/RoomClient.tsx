"use client";

import React, { useEffect } from "react";
// import { StorageImage } from "@aws-amplify/ui-react-storage";

export default function RoomClient({
  user,
}: {
  user: {
    id: string;
    email: string | undefined;
  };
}) {
  // useEffect(() => {
  //   const sub = databaseClient.subscriptions.receive().subscribe({
  //     next: (e) => console.log(e),
  //     error: (e) => console.log(e),
  //   });
  //   console.log(sub);
  //   return () => sub.unsubscribe();
  // }, []);

  return <>{/*  */}</>;
}
