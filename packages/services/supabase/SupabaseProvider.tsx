import type { SupabaseClient } from "@supabase/supabase-js";
import {
  createContext,
  createSignal,
  onMount,
  useContext,
  type Component,
  type JSX,
} from "solid-js";
import { createBrowserClient } from "./createSupabaseClient";

type SupabaseContextValue = () => SupabaseClient | null;

const SupabaseContext = createContext<SupabaseContextValue>(() => null);

type Props = {
  children: JSX.Element;
  supabaseUrl: string;
  supabaseKey: string;
};

export const SupabaseProvider: Component<Props> = (props) => {
  const [client, setClient] = createSignal<SupabaseClient | null>(null);

  onMount(() => {
    const client = createBrowserClient(props.supabaseUrl, props.supabaseKey);
    setClient(client);
  });

  return (
    <SupabaseContext.Provider value={client}>
      {props.children}
    </SupabaseContext.Provider>
  );
};

export const useSupabaseClient = () => {
  return useContext(SupabaseContext);
};
