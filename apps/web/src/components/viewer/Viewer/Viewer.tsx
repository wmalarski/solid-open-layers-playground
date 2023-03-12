import { createSignal, type Component } from "solid-js";
import { MapEditor } from "../MapEditor/MapEditor";
import { ToolSwitch } from "../ToolSwitch/ToolSwitch";
import type { ToolKind } from "../types";

export const Viewer: Component = () => {
  const [tool, setTool] = createSignal<ToolKind>("selector");

  return (
    <div class="flex h-full grow">
      <MapEditor tool={tool()} onToolChange={setTool} />
      <ToolSwitch tool={tool()} onToolChange={setTool} />
    </div>
  );
};
