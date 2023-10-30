import { useSession } from "next-auth/react";

import DefaultLayout from "~/components/layout/default";
import InfoPanel from "~/components/InfoPanel";
import { LoadingPage } from "~/components/loading";

import { api } from "~/utils/api";

export default function Home() {
  const { data: sessionData, status } = useSession({
    required: true,
  });

  const { data } = api.twitch.getUser.useQuery({
    accessToken: sessionData?.accessToken ?? "",
  });

  const userData = data?.data[0];
  return (
    <>
      <DefaultLayout>
        {status === "loading" && <LoadingPage />}
        {status !== "loading" && (
          <>
            <InfoPanel
              id={userData?.id ?? ""}
              display_name={userData?.display_name ?? ""}
              type={userData?.type ?? ""}
              broadcaster_type={userData?.broadcaster_type ?? ""}
              description={userData?.description ?? ""}
              profile_image_url={userData?.profile_image_url ?? ""}
              offline_image_url={userData?.offline_image_url ?? ""}
              email={userData?.email ?? ""}
              created_at={userData?.created_at ?? ""}
            />
          </>
        )}
      </DefaultLayout>
    </>
  );
}
