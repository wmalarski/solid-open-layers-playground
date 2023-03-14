/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createBrowserSupabaseClient,
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
