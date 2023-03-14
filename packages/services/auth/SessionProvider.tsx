import type { Session } from "@supabase/supabase-js";
import {
  createContext,
  createEffect,
  createSignal,
  onCleanup,
  type Component,
  type JSX,
} from "solid-js";
import { useSupabaseClient } from "../supabase/SupabaseProvider";

type SessionContextState =
  | {
      state: "authorized";
      session: Session;
    }
  | {
      state: "loading" | "unauthorized";
    };

type SessionContextValue = () => SessionContextState;

const defaultValue: SessionContextValue = () => {
  return { state: "loading" };
};

const SessionContext = createContext<SessionContextValue>(defaultValue);

type Props = {
  children: JSX.Element;
};

export const SessionProvider: Component<Props> = (props) => {
  const supabaseClient = useSupabaseClient();

  const [session, setSession] = createSignal<SessionContextState>(
    defaultValue()
  );

  createEffect(() => {
    const client = supabaseClient();

    if (!client) {
      return;
    }

    const { data } = client.auth.onAuthStateChange((_event, session) => {
      setSession(
        session ? { session, state: "authorized" } : { state: "unauthorized" }
      );
    });

    onCleanup(() => {
      data.subscription.unsubscribe();
    });
  });

  return (
    <SessionContext.Provider value={session}>
      {props.children}
    </SessionContext.Provider>
  );
};
