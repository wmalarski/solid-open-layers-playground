import { Button } from "@sol/ui/components/Button";
import { ClientOnly } from "@sol/ui/components/ClientOnly";
import { lazy, Suspense } from "solid-js";
import { Title } from "solid-start";
import { useTranslation } from "~/utils/i18n";

const Viewer = lazy(() => import("~/components/viewer/Viewer/Viewer"));

export default function Scan() {
  const { t } = useTranslation("scan");

  return (
    <main class="flex grow flex-col">
      <Title>{t("title")}</Title>
      <Button>{t("hello")}</Button>
      <ClientOnly>
        <Suspense>
          <Viewer />
        </Suspense>
      </ClientOnly>
    </main>
  );
}
