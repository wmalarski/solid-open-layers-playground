import { createServerClient } from "@sol/services/supabase/createServerClient";
import { serverEnv } from "./serverEnv";

type CreateSupabaseServerClientArgs = {
  request: Request;
  response: Response;
};
export const createSupabaseServerClient = ({
  request,
  response,
}: CreateSupabaseServerClientArgs) => {
  return createServerClient(
    serverEnv.VITE_SUPABASE_URL,
    serverEnv.VITE_SUPABASE_ANON_KEY,
    { request, response }
  );
};
