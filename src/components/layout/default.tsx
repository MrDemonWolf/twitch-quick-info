import type { PropsWithChildren } from "react";

import { useSession } from "next-auth/react";

import Footer from "~/components/Footer";
import NavigationLoggedOut from "~/components/Navigation/logged-out";
import NavigationLoggedIn from "~/components/Navigation/logged-in";

export default function DefaultLayout(props: PropsWithChildren) {
  const { status } = useSession();
  return (
    <>
      <main className="flex h-screen flex-col justify-between bg-gray-100 dark:bg-gray-900">
        <header id="header" className="bg-white dark:bg-gray-800">
          {status === "authenticated" ? (
            <NavigationLoggedIn />
          ) : (
            <NavigationLoggedOut />
          )}
        </header>
        {props.children}
        <Footer />
      </main>
    </>
  );
}
