import {
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemIndicator,
  RadioGroupItemInput,
  RadioGroupItemLabel,
  RadioGroupLabel,
  RadioGroupRoot,
} from "@sol/ui/components/RadioGroup";
import { type Component } from "solid-js";
import { useTranslation } from "~/utils/i18n";
import type { ToolKind } from "../types";

type Props = {
  tool: ToolKind;
  onToolChange: (tool: ToolKind) => void;
};

export const ToolSwitch: Component<Props> = (props) => {
  const { t } = useTranslation("editor");

  const onValueChange = (value: string) => {
    props.onToolChange(value as ToolKind);
  };

  return (
    <RadioGroupRoot value={props.tool} onValueChange={onValueChange}>
      <RadioGroupLabel>{t("selectTool")}</RadioGroupLabel>
      <RadioGroupItem value="pencil">
        <RadioGroupItemInput />
        <RadioGroupItemControl>
          <RadioGroupItemIndicator />
        </RadioGroupItemControl>
        <RadioGroupItemLabel>{t("pencil")}</RadioGroupItemLabel>
      </RadioGroupItem>
      <RadioGroupItem value="selector">
        <RadioGroupItemInput />
        <RadioGroupItemControl>
          <RadioGroupItemIndicator />
        </RadioGroupItemControl>
        <RadioGroupItemLabel>{t("selector")}</RadioGroupItemLabel>
      </RadioGroupItem>
    </RadioGroupRoot>
  );
};
