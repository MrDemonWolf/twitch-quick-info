import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import DefaultLayout from "~/components/layout/default";
import { LoadingPage } from "~/components/loading";
import InfoPanel from "~/components/InfoPanel";

import { api } from "~/utils/api";
import Hero from "~/components/Hero";

export default function ExampleClientComponent() {
  const { data: sessionData, status } = useSession({
    required: true,
  });
  const router = useRouter();

  const hasId = /^\d+$/.test(router.query.slug as string);

  let userData = null;
  if (!hasId) {
    const { data: userWithoutId } = api.twitch.getUserByName.useQuery({
      accessToken: sessionData?.accessToken ?? "",
      login: router.query.slug as string,
    });
    userData = userWithoutId?.data[0];
  } else {
    const { data: userWithId } = api.twitch.getUserById.useQuery({
      accessToken: sessionData?.accessToken ?? "",
      id: router.query.slug as string,
    });
    userData = userWithId?.data[0];
  }

  return (
    <>
      <DefaultLayout>
        {!router.isReady && status === "loading" && !userData && (
          <LoadingPage />
        )}
        {router.isReady && status !== "loading" && userData && (
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
        )}
        {router.isReady && !userData && <Hero message="User not found" />}
      </DefaultLayout>
    </>
  );
}
