import { RadioGroup as KobalteRadioGroup } from "@kobalte/core";
import type { Component } from "solid-js";
import { twCx } from "../../utils/twCva";

export const RadioGroupRoot: Component<
  KobalteRadioGroup.RadioGroupRootProps
> = (props) => {
  return (
    <KobalteRadioGroup.Root
      {...props}
      class={twCx("flex flex-col gap-2", props.class)}
    />
  );
};

export const RadioGroupLabel: Component<
  KobalteRadioGroup.RadioGroupLabelProps
> = (props) => {
  return (
    <KobalteRadioGroup.Label
      {...props}
      class={twCx("label label-text", props.class)}
    />
  );
};

export const RadioGroupItem: Component<
  KobalteRadioGroup.RadioGroupItemProps
> = (props) => {
  return (
    <KobalteRadioGroup.Item
      {...props}
      class={twCx("flex flex-col gap-2", props.class)}
    />
  );
};

export const RadioGroupItemInput: Component<
  KobalteRadioGroup.RadioGroupItemInputProps
> = (props) => {
  return (
    <KobalteRadioGroup.ItemInput
      {...props}
      class={twCx("radio", props.class)}
    />
  );
};

export const RadioGroupItemControl: Component<
  KobalteRadioGroup.RadioGroupItemControlProps
> = (props) => {
  return (
    <KobalteRadioGroup.ItemControl
      {...props}
      class={twCx("flex flex-col gap-2", props.class)}
    />
  );
};

export const RadioGroupItemIndicator: Component<
  KobalteRadioGroup.RadioGroupItemIndicatorProps
> = (props) => {
  return (
    <KobalteRadioGroup.ItemIndicator
      {...props}
      class={twCx("radio", props.class)}
    />
  );
};

export const RadioGroupItemLabel: Component<
  KobalteRadioGroup.RadioGroupItemLabelProps
> = (props) => {
  return (
    <KobalteRadioGroup.ItemLabel
      {...props}
      class={twCx("flex flex-col gap-2", props.class)}
    />
  );
};

export const RadioGroupDescription: Component<
  KobalteRadioGroup.RadioGroupDescriptionProps
> = (props) => {
  return (
    <KobalteRadioGroup.Description
      {...props}
      class={twCx("flex flex-col gap-2", props.class)}
    />
  );
};

export const RadioGroupErrorMessage: Component<
  KobalteRadioGroup.RadioGroupErrorMessageProps
> = (props) => {
  return (
    <KobalteRadioGroup.ErrorMessage
      {...props}
      class={twCx("flex flex-col gap-2", props.class)}
    />
  );
};
