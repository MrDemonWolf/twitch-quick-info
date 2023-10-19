import type { PropsWithChildren } from "react";

import { useSession } from "next-auth/react";

import LoggedOut from "~/components/Navigation/logged-out";
import LoggedIn from "~/components/Navigation/logged-in";

export default function DefaultLayout(props: PropsWithChildren) {
  const { data: sessionData } = useSession();
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <header id="header" className="bg-white dark:bg-gray-800">
        {sessionData ? <LoggedIn /> : <LoggedOut />}
      </header>
      {props.children}
      {/* <Footer /> */}
    </main>
  );
}
