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
      class={twCx("text-sm font-medium select-none", props.class)}
    />
  );
};

export const RadioGroupItem: Component<
  KobalteRadioGroup.RadioGroupItemProps
> = (props) => {
  return (
    <KobalteRadioGroup.Item
      {...props}
      class={twCx("flex items-center", props.class)}
    />
  );
};

export const RadioGroupItemInput = KobalteRadioGroup.ItemInput;

export const RadioGroupItemControl: Component<
  KobalteRadioGroup.RadioGroupItemControlProps
> = (props) => {
  return (
    <KobalteRadioGroup.ItemControl
      {...props}
      class={twCx(
        "flex items-center justify-center h-5 w-5 rounded-xl border-gray-100 bg-white",
        "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-700",
        "data-[checked]:border-blue-700 data-[checked]:bg-blue-700",
        "data-[invalid]:border-red-500 data-[invalid]:bg-red-500",
        props.class
      )}
    />
  );
};

export const RadioGroupItemIndicator: Component<
  KobalteRadioGroup.RadioGroupItemIndicatorProps
> = (props) => {
  return (
    <KobalteRadioGroup.ItemIndicator
      {...props}
      class={twCx("bg-black rounded-md w-3 h-3", props.class)}
    />
  );
};

export const RadioGroupItemLabel: Component<
  KobalteRadioGroup.RadioGroupItemLabelProps
> = (props) => {
  return (
    <KobalteRadioGroup.ItemLabel
      {...props}
      class={twCx("ml-2 text-sm select-none", props.class)}
    />
  );
};

export const RadioGroupDescription: Component<
  KobalteRadioGroup.RadioGroupDescriptionProps
> = (props) => {
  return (
    <KobalteRadioGroup.Description
      {...props}
      class={twCx("text-xs select-none", props.class)}
    />
  );
};

export const RadioGroupErrorMessage: Component<
  KobalteRadioGroup.RadioGroupErrorMessageProps
> = (props) => {
  return (
    <KobalteRadioGroup.ErrorMessage
      {...props}
      class={twCx("text-xs select-none text-red-500", props.class)}
    />
  );
};
