import { Button } from "@sol/ui/components/Button";
import { useI18n } from "@solid-primitives/i18n";
import { Show } from "solid-js";
import { isServer } from "solid-js/web";
import { Title } from "solid-start";
import { MapCard } from "~/components/MapCard/MapCard";

export default function Home() {
  const [t] = useI18n();

  return (
    <main class="flex grow flex-col">
      <Title>Hello World</Title>
      <Button>{t("hello")}</Button>
      <Show when={!isServer}>{<MapCard />}</Show>
    </main>
  );
}
