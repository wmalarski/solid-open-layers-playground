import { Component } from "solid-js";
import type { ToolKind } from "../MapCard.utils";

type Props = {
  tool: ToolKind;
  onToolChange: (tool: ToolKind) => void;
};

export const ToolSwitch: Component = () => {
  return <div class="flex flex-col"></div>;
};
