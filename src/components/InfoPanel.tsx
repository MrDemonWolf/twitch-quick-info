import { useSession } from "next-auth/react";
import DefaultLayout from "~/components/layout/default";
import Hero from "~/components/Hero";
import { api } from "~/utils/api";

type Props = {
  landingPage: true;
};

export default function Home(props: Props) {
  const { data: sessionData } = useSession();
  if (!sessionData) return null;
  const { data: twitch, isLoading: postLoading } = api.twitch.getUser.useQuery({
    accessToken: sessionData.accessToken,
  });

  return (
    <>
      <DefaultLayout>{twitch?.data[0]}</DefaultLayout>
    </>
  );
}

// export default function Home() {
//   // get token from session and pass it to the server
//   const { data: sessionData } = useSession();
//   if (!sessionData) return <Hero />;

//   const { data: twitch, isLoading: postLoading } = api.twitch.getUser.useQuery({
//     accessToken: sessionData.accessToken,
//   });

//   if (postLoading) return <>Loading...</>;

//   return (
//     <>
//       <DefaultLayout>{twitch?.data[0]?.display_name}</DefaultLayout>
//     </>
//   );
// }
