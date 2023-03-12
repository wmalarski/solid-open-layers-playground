import type { Component } from "solid-js";
import type { ToolKind } from "../types";

type Props = {
  tool: ToolKind;
  onToolChange: (tool: ToolKind) => void;
};

export const ToolSwitch: Component<Props> = (props) => {
  return (
    <div class="flex flex-col">
      <div class="form-control">
        <label class="label cursor-pointer">
          <input
            type="radio"
            class="radio"
            checked={props.tool === "pencil"}
            onChange={() => props.onToolChange("pencil")}
          />
          <span class="label-text">Pencil</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <input
            type="radio"
            class="radio"
            checked={props.tool === "selector"}
            onChange={() => props.onToolChange("selector")}
          />
          <span class="label-text">Selector</span>
        </label>
      </div>
    </div>
  );
};
