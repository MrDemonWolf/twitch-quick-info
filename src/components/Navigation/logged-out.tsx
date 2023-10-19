import Image from "next/image";
import { signIn } from "next-auth/react";

import { Disclosure } from "@headlessui/react";

export default function LoggedOut() {
  return (
    <Disclosure as="header" className="bg-gray-800">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="relative z-10 flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="h-8 w-auto"
                  src="/img/logo.png"
                  alt="Streamer Quick Info"
                  width={32}
                  height={32}
                />
                <span className="ml-4 align-middle dark:text-white">
                  Streamer Quick Info
                </span>
              </div>
            </div>
            <div className="relative z-10 ml-4 flex items-center">
              <button
                type="button"
                onClick={() => void signIn("twitch")}
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
