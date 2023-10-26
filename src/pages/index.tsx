import { useSession } from "next-auth/react";
import DefaultLayout from "~/components/layout/default";
import Hero from "~/components/Hero";

export default function Home() {
  const { data: sessionData } = useSession();

  return (
    <>
      <DefaultLayout>
        {sessionData ? (InfoPanel(u)}
      </DefaultLayout>
    </>
  );
}
