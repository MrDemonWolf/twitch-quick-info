import Image from "next/image";

import dayjs from "dayjs";
import {
  WrenchIcon,
  CheckBadgeIcon,
  HeartIcon,
  CalendarDaysIcon,
  IdentificationIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

type Props = {
  id: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  email: string;
  created_at: string;
};

export default function InfoPanel(props: Props) {
  return (
    <>
      <div className="m-10 mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-700">
        <Image
          src={props.profile_image_url}
          className="h-56 w-full object-cover object-center"
          alt="avatar"
          width={1920}
          height={1080}
        />
        <div className="flex items-center bg-gray-100 px-6 py-3 dark:bg-gray-600">
          <h1 className="text-primary-500 text-2xl font-semibold dark:text-white">
            {props.display_name}
          </h1>
          {props.type === "staff" && (
            <>
              <WrenchIcon
                width={24}
                height={24}
                title="Twitch Staff"
                className="text-primary-500 dark:text-secondary-400 ml-2 text-3xl"
              />
            </>
          )}
          {props.broadcaster_type === "partner" && (
            <>
              <CheckBadgeIcon
                width={28}
                height={28}
                title="Twitch Partner or Verified"
                className="text-primary-500 dark:text-secondary-400 ml-2 text-3xl"
              />
            </>
          )}
          {props.broadcaster_type === "affiliate" && (
            <>
              <HeartIcon
                width={28}
                height={28}
                title="Twitch Partner or Verified"
                className="text-primary-500 dark:text-secondary-400 ml-2 text-3xl"
              />
            </>
          )}
        </div>
        <div className="px-6 py-4">
          {props.description && (
            <>
              <p className="mb-4 py-2 text-xl text-gray-700 dark:text-white">
                {props.description}
              </p>
            </>
          )}
          <div className="mt-4 flex items-center text-gray-700 dark:text-white">
            <CalendarDaysIcon
              width={24}
              height={24}
              className="text-primary-500 dark:text-secondary-400"
            />

            <h2 className="px-2 text-sm">
              {dayjs(props.created_at).format("MMMM D, YYYY")}
            </h2>
          </div>
          <div className="mt-4 flex items-center text-gray-700 dark:text-white">
            <IdentificationIcon
              width={24}
              height={24}
              className="text-primary-500 dark:text-secondary-400"
            />
            <h2 className="px-2 text-sm">{props.id}</h2>
          </div>
          {props.email && (
            <>
              <div className="mt-4 flex items-center text-gray-700 dark:text-white">
                <EnvelopeIcon
                  width={24}
                  height={24}
                  className="text-primary-500 dark:text-secondary-400"
                />
                <h2 className="px-2 text-sm">{props.email}</h2>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
