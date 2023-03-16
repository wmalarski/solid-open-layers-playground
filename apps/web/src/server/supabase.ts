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
};

export const createSupabaseServerClient = async ({
  request,
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
    return { cookie: null, session: null, supabase };
  }

  const userResponse = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (userResponse.error || !userResponse.data.session) {
    const cookie = await storage.destroySession(session);
    return { cookie, session: null, supabase };
  }

  if (userResponse.data.session.access_token === accessToken) {
    session.set("accessToken", userResponse.data.session.access_token);
    session.set("refreshToken", userResponse.data.session.refresh_token);
    const cookie = await storage.commitSession(session);
    return { cookie, session: userResponse.data.session, supabase };
  }

  return { session: userResponse.data.session, supabase };
};

type CreateUserSessionArgs = {
  request: Request;
  accessToken: string;
  refreshToken: string;
};

export const createUserSession = async ({
  request,
  accessToken,
  refreshToken,
}: CreateUserSessionArgs) => {
  const cookie = request.headers.get("Cookie") ?? "";
  const session = await storage.getSession(cookie);

  session.set("accessToken", accessToken);
  session.set("refreshToken", refreshToken);
  return storage.commitSession(session);
};

type DestroyUserSessionArgs = {
  request: Request;
};

export const destroyUserSession = async ({
  request,
}: DestroyUserSessionArgs) => {
  const cookie = request.headers.get("Cookie") ?? "";
  const session = await storage.getSession(cookie);

  return storage.destroySession(session);
};
