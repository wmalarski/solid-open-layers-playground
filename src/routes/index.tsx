import { Title } from "solid-start";
import { MapCard } from "~/components/MapCard/MapCard";

export default function Home() {
  return (
    <main class="flex-grow flex flex-col">
      <Title>Hello World</Title>
      <button>Hello</button>
      <MapCard />
    </main>
  );
}
