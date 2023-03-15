import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import {
  createContext,
  createSignal,
  onMount,
  useContext,
  type Component,
  type JSX,
} from "solid-js";

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
    const supabase = createClient(props.supabaseUrl, props.supabaseKey);
    setClient(supabase);
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
