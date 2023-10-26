"use client";

import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import DefaultLayout from "~/components/layout/default";

export default function ExampleClientComponent() {
  const params = useParams();

  // get token from session and pass it to the server
  const { data: sessionData } = useSession();

  console.log(sessionData);
  console.log(params);

  return (
    <>
      <DefaultLayout></DefaultLayout>
    </>
  );
}
