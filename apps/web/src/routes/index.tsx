import { Button } from "@sol/ui/components/Button";
import { ClientOnly } from "@sol/ui/components/ClientOnly";
import { lazy, Suspense } from "solid-js";
import { Title } from "solid-start";
import { useTranslation } from "~/utils/i18n";

const Viewer = lazy(() => import("~/components/viewer/Viewer/Viewer"));

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <main class="flex grow flex-col">
      <Title>Hello World</Title>
      <Button>{t("hello")}</Button>
      <ClientOnly>
        <Suspense>
          <Viewer />
        </Suspense>
      </ClientOnly>
    </main>
  );
}
