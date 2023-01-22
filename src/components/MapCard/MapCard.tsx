import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { Component, createEffect, createSignal } from "solid-js";

export const MapCard: Component = () => {
  if (typeof window === "undefined") {
    return <div id="map" />;
  }

  const [ref, setRef] = createSignal<HTMLDivElement>();

  const map = new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  createEffect(() => {
    map.setTarget(ref());
  });

  return <div class="flex-grow" ref={setRef} />;
};
