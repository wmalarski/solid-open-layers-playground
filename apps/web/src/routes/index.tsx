import { Button } from "@sol/ui/components/Button";
import { Show } from "solid-js";
import { isServer } from "solid-js/web";
import { Title } from "solid-start";
import { MapCard } from "~/components/MapCard/MapCard";

export default function Home() {
  return (
    <main class="flex grow flex-col">
      <Title>Hello World</Title>
      <Button>Hello</Button>
      <Show when={!isServer}>{<MapCard />}</Show>
    </main>
  );
}
