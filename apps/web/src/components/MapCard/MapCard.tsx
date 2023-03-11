import { Map, View } from "ol";
import Draw, { createBox, type DrawEvent } from "ol/interaction/Draw.js";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import {
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  type Component,
} from "solid-js";
import type { ToolKind } from "./MapCard.utils";
import { ToolSwitch } from "./ToolSwitch/ToolSwitch";

export const MapCard: Component = () => {
  const [ref, setRef] = createSignal<HTMLDivElement>();

  const raster = new TileLayer({
    source: new OSM(),
  });

  const source = new VectorSource({
    wrapX: false,
  });

  const vector = new VectorLayer({
    source,
  });

  const map = new Map({
    layers: [raster, vector],
    target: "map",
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  createEffect(() => {
    map.setTarget(ref());
  });

  const [tool, setTool] = createSignal<ToolKind>("selector");

  const draw = new Draw({
    geometryFunction: createBox(),
    source,
    type: "Circle",
  });

  createEffect(() => {
    if (tool() !== "pencil") {
      return;
    }

    const callback = (event: DrawEvent) => {
      setTool("selector");
      map.removeInteraction(draw);

      console.log(event.feature.getGeometry(), event.feature.getProperties());
    };

    onMount(() => {
      map.addInteraction(draw);
      draw.on("drawend", callback);
    });

    onCleanup(() => {
      draw.un("drawend", callback);
    });
  });

  return (
    <div class="flex h-full grow">
      <div class="h-full grow" ref={setRef} />
      <ToolSwitch tool={tool()} onToolChange={setTool} />
    </div>
  );
};
