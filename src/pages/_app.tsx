import Head from "next/head";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { ThemeProvider } from "~/components/theme-provider";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_APP_DESCRIPTION}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <meta
          property="og:description"
          content={process.env.NEXT_PUBLIC_APP_NAME}
        />
        <meta property="og:image" content="/og.png" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site"
          content={`@${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`}
        />
        <meta
          name="twitter:creator"
          content={`@${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`}
        />
        <meta name="twitter:title" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <meta
          name="twitter:description"
          content={process.env.NEXT_PUBLIC_APP_DESCRIPTION}
        />
        <meta name="twitter:image" content="/og.png" />
        <meta name="twitter:url" content={process.env.NEXT_PUBLIC_APP_URL} />
        <meta name="twitter:domain" content={process.env.NEXT_PUBLIC_APP_URL} />
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
