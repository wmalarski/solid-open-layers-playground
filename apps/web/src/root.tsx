// @refresh reload
import { SessionProvider } from "@sol/services/auth/SessionProvider";
import { SupabaseProvider } from "@sol/services/supabase/SupabaseProvider";
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { clientEnv } from "./utils/clientEnv";
import { I18nProvider } from "./utils/i18n";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="flex h-screen flex-col overflow-y-clip">
        <Suspense>
          <ErrorBoundary>
            <I18nProvider>
              <SupabaseProvider
                supabaseKey={clientEnv.VITE_SUPABASE_ANON_KEY}
                supabaseUrl={clientEnv.VITE_SUPABASE_URL}
              >
                <SessionProvider>
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </SessionProvider>
              </SupabaseProvider>
            </I18nProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
