import { Map, View } from "ol";
import Draw, { createBox } from "ol/interaction/Draw.js";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import { Component, createEffect, createSignal } from "solid-js";
import { ToolKind } from "./MapCard.utils";

export const MapCard: Component = () => {
  const [ref, setRef] = createSignal<HTMLDivElement>();

  const raster = new TileLayer({
    source: new OSM(),
  });

  const source = new VectorSource({
    wrapX: false,
  });

  const vector = new VectorLayer({
    source: source,
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

  map.addInteraction(draw);

  return (
    <div class="flex h-full grow">
      <div class="h-full grow" ref={setRef} />
    </div>
  );
};
