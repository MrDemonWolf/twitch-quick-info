import { Fragment } from "react";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import LoggedOut from "~/components/Navigation/logged-out";
import ThemeToggle from "../theme-toggle";
import Link from "next/link";

export default function LoggedIn() {
  const { data: sessionData } = useSession();
  if (!sessionData) return <LoggedOut />;
  return (
    <Disclosure as="header" className="bg-gray-200 dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      className="h-8 w-auto"
                      src="/img/logo.png"
                      alt="Streamer Quick Info"
                      width={32}
                      height={32}
                    />
                    <span className="ml-4 align-middle font-bold text-gray-900 dark:text-white">
                      Streamer Quick Info
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-800 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 dark:bg-gray-700 dark:text-gray-300 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          e.stopPropagation();
                          const query = e.currentTarget.value;
                          window.location.href = `/${query}`;
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                <ThemeToggle />
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <ThemeToggle />
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="relative flex items-center rounded-full bg-gray-400 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:bg-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={
                          sessionData.user.image ??
                          "https://www.gravatar.com/avatar/00000000000000000000000000000000"
                        }
                        alt={`Avatar of ${sessionData.user.name}`}
                        width={64}
                        height={64}
                      />
                      <span className="ml-4 pr-4 text-lg font-bold dark:text-white">
                        {sessionData.user.name}
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-500">
                      <Menu.Item
                        as="button"
                        onClick={() => void signOut()}
                        className="block w-full  px-4 py-2 text-sm text-gray-700 dark:text-white"
                      >
                        Sign Out
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="px-2 pb-3 pt-2">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={
                      sessionData.user.image ??
                      "https://www.gravatar.com/avatar/00000000000000000000000000000000"
                    }
                    alt={`Avatar of ${sessionData.user.name}`}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="ml-3">
                  <div className="dark:text-whitem text-lg font-bold text-white">
                    {sessionData.user.name}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Disclosure.Button
                  onClick={() => void signOut()}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign Out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
