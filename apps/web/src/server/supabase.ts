import { createClient } from "@sol/services/supabase";
import { createCookieSessionStorage } from "solid-start";
import { serverEnv } from "./serverEnv";

const storage = createCookieSessionStorage({
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 30 days
    name: "session",
    path: "/",
    sameSite: "lax",
    secrets: [serverEnv.VITE_SESSION_SECRET],
    secure: import.meta.env.PROD,
  },
});

type CreateSupabaseServerClientArgs = {
  request: Request;
  response: Response;
};

export const createSupabaseServerClient = async ({
  request,
  response,
}: CreateSupabaseServerClientArgs) => {
  const supabase = createClient(
    serverEnv.VITE_SUPABASE_URL,
    serverEnv.VITE_SUPABASE_ANON_KEY,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

  const cookie = request.headers.get("Cookie") ?? "";
  const session = await storage.getSession(cookie);

  const accessToken = session.get("accessToken");
  const refreshToken = session.get("refreshToken");

  if (!accessToken || !refreshToken) {
    return { session: null, supabase };
  }

  const userResponse = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (userResponse.error || !userResponse.data.session) {
    response.headers.set("Set-Cookie", await storage.destroySession(session));
    return { session: null, supabase };
  }

  if (userResponse.data.session.access_token === accessToken) {
    session.set("accessToken", userResponse.data.session.access_token);
    session.set("refreshToken", userResponse.data.session.refresh_token);
    response.headers.set("Set-Cookie", await storage.commitSession(session));
  }

  return { session: userResponse.data.session, supabase };
};

export const destroyUserSession = async ({
  request,
  response,
}: CreateSupabaseServerClientArgs) => {
  const cookie = request.headers.get("Cookie") ?? "";
  const session = await storage.getSession(cookie);

  response.headers.set("Set-Cookie", await storage.destroySession(session));
};
