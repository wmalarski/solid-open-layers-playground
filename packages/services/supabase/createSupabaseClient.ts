/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
  parseCookies,
  serializeCookie,
  type CookieOptions,
  type SupabaseClientOptionsWithoutAuth,
} from "@supabase/auth-helpers-shared";
import type { SupabaseClient } from "@supabase/supabase-js";

export function createBrowserClient<
  Database = any,
  SchemaName extends string & keyof Database = "public" extends keyof Database
    ? "public"
    : string & keyof Database
>(
  supabaseUrl: string,
  supabaseKey: string,
  {
    options,
    cookieOptions,
  }: {
    options?: SupabaseClientOptionsWithoutAuth<SchemaName>;
    cookieOptions?: CookieOptions;
  } = {}
): SupabaseClient<Database, SchemaName> {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "supabaseUrl and supabaseKey are required to create a Supabase client! Find these under `Settings` > `API` in your Supabase dashboard."
    );
  }

  return createBrowserSupabaseClient<Database, SchemaName>({
    cookieOptions,
    options,
    supabaseKey,
    supabaseUrl,
  });
}

export function createServerClient<
  Database = any,
  SchemaName extends string & keyof Database = "public" extends keyof Database
    ? "public"
    : string & keyof Database
>(
  supabaseUrl: string,
  supabaseKey: string,
  {
    request,
    response,
    options,
    cookieOptions,
  }: {
    request: Request;
    response: Response;
    options?: SupabaseClientOptionsWithoutAuth<SchemaName>;
    cookieOptions?: CookieOptions;
  }
): SupabaseClient<Database, SchemaName> {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "supabaseUrl and supabaseKey are required to create a Supabase client! Find these under `Settings` > `API` in your Supabase dashboard."
    );
  }

  if (!request || !response) {
    throw new Error(
      "request and response must be passed to createSupabaseClient function, when called from loader or action"
    );
  }

  return createServerSupabaseClient<Database, SchemaName>({
    cookieOptions,
    getCookie: (name) => {
      return parseCookies(request?.headers?.get("Cookie") ?? "")[name];
    },
    getRequestHeader: (key) => {
      return request.headers.get(key) ?? undefined;
    },
    options,
    setCookie(name, value, options) {
      const cookieStr = serializeCookie(name, value, {
        ...options,
        // Allow supabase-js on the client to read the cookie as well
        httpOnly: false,
      });
      response.headers.set("set-cookie", cookieStr);
    },
    supabaseKey,
    supabaseUrl,
  });
}
