import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { Component, createEffect, createSignal } from "solid-js";

export const MapCard: Component = () => {
  if (typeof window === "undefined") {
    // eslint-disable-next-line solid/components-return-once
    return <div id="map" />;
  }

  const [ref, setRef] = createSignal<HTMLDivElement>();

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: "map",
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  createEffect(() => {
    map.setTarget(ref());
  });

  return <div class="h-full grow" ref={setRef} />;
};
