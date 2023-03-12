import { createSignal, type Component } from "solid-js";
import { ToolSwitch } from "../ToolSwitch/ToolSwitch";
import type { ToolKind } from "../types";

const Viewer: Component = () => {
  const [tool, setTool] = createSignal<ToolKind>("selector");

  return (
    <div class="flex h-full grow">
      {/* <MapEditor tool={tool()} onToolChange={setTool} /> */}
      <ToolSwitch tool={tool()} onToolChange={setTool} />
    </div>
  );
};

export default Viewer;
