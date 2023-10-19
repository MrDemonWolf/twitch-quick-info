import { useSession } from "next-auth/react";
import Head from "next/head";

import DefaultLayout from "~/components/layout/default";

export default function Home() {
  const { data: sessionData } = useSession();

  console.log(sessionData);

  return (
    <>
      <DefaultLayout></DefaultLayout>
    </>
  );
}