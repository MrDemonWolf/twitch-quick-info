import { z } from "zod";

import { TRPCError } from "@trpc/server";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

type Headers = {
  Authorization: string;
  "Client-Id": string;
};
type UserResponse = {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  email: string;
  created_at: string;
};

export const twitchRouter = createTRPCRouter({
  getUser: protectedProcedure
    .input(
      z.object({
        accessToken: z.string(),
      }),
    )
    .query(async ({ input }) => {
      try {
        const response = await fetch("https://api.twitch.tv/helix/users", {
          headers: {
            Authorization: `Bearer ${input.accessToken}`,
            "Client-Id": process.env.TWITCH_CLIENT_ID,
          } as Headers,
        });
        const json = (await response.json()) as { data: UserResponse[] };
        return json;
      } catch (err) {
        console.log(err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),
  getUserById: protectedProcedure
    .input(
      z.object({
        accessToken: z.string(),
        id: z.string(),
      }),
    )
    .query(async ({ input }) => {
      try {
        if (!input.accessToken) throw new Error("No access token provided");
        if (!input.id) throw new Error("No id provided");
        const response = await fetch(
          `https://api.twitch.tv/helix/users?id=${input.id}`,
          {
            headers: {
              Authorization: `Bearer ${input.accessToken}`,
              "Client-Id": process.env.TWITCH_CLIENT_ID,
            } as Headers,
          },
        );
        const json = (await response.json()) as { data: UserResponse[] };
        return json;
      } catch (err) {
        console.log(err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),
  getUserByName: protectedProcedure
    .input(
      z.object({
        accessToken: z.string(),
        login: z.string(),
      }),
    )
    .query(async ({ input }) => {
      try {
        if (!input.accessToken) throw new Error("No access token provided");
        if (!input.login) throw new Error("No login provided");
        const response = await fetch(
          `https://api.twitch.tv/helix/users?login=${input.login}`,
          {
            headers: {
              Authorization: `Bearer ${input.accessToken}`,
              "Client-Id": process.env.TWITCH_CLIENT_ID,
            } as Headers,
          },
        );

        const json = (await response.json()) as { data: UserResponse[] };
        return json;
      } catch (err) {
        console.log(err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),
});
