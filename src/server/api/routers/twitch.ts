import { z } from "zod";

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
  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     post = { id: post.id + 1, name: input.name };
  //     return post;
  //   }),

  // getUser: protectedProcedure.query(() => {

  //   const
  // }),
  // make a requiest to GET https://api.twitch.tv/helix/users?login=USERNAME using fetch and the access token priv
  // return the response
  getUser: protectedProcedure
    .input(
      z.object({
        accessToken: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const response = await fetch("https://api.twitch.tv/helix/users", {
        headers: {
          Authorization: `Bearer ${input.accessToken}`,
          "Client-Id": process.env.TWITCH_CLIENT_ID,
        } as Headers,
      });
      const json = (await response.json()) as { data: UserResponse[] };
      return json;
    }),
});
