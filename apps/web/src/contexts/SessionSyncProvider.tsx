import { useSession } from "@sol/services/auth/SessionProvider";
import { createResource, type Component, type JSX } from "solid-js";
import { createServerAction$, redirect } from "solid-start/server";
import { z } from "zod";
import { createUserSession, destroyUserSession } from "~/server/supabase";

type Props = {
  children: JSX.Element;
};

const signInSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});

export const SessionSyncProvider: Component<Props> = () => {
  const [, signIn] = createServerAction$(
    async (input: z.infer<typeof signInSchema>, event) => {
      const data = signInSchema.parse(input);

      const cookie = await createUserSession({
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        request: event.request,
      });

      console.log("signIn", { cookie, data });

      return redirect("/scans", { headers: { "Set-Cookie": cookie } });
    }
  );

  const [, signOut] = createServerAction$(async (_, event) => {
    const cookie = await destroyUserSession({ request: event.request });

    console.log("signOut", { cookie });

    return redirect("/", { headers: { "Set-Cookie": cookie } });
  });

  const session = useSession();

  createResource(
    () => ({ session: session() }),
    (args) => {
      if (!args.session) {
        signOut();
        return;
      }
      signIn({
        access_token: args.session.access_token,
        refresh_token: args.session.refresh_token,
      });
    }
  );

  return null;
};
