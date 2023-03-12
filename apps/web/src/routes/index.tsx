import { Button } from "@sol/ui/components/Button";
import { Show } from "solid-js";
import { isServer } from "solid-js/web";
import { Title } from "solid-start";
import { Viewer } from "~/components/viewer/Viewer/Viewer";
import { useTranslation } from "~/utils/i18n";

export default function Home() {
  // const [t] = useI18n();
  const { t } = useTranslation("home");

  return (
    <main class="flex grow flex-col">
      <Title>Hello World</Title>
      <Button>{t("hello")}</Button>
      <Show when={!isServer}>{<Viewer />}</Show>
    </main>
  );
}
