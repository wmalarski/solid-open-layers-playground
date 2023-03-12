import { Button as KobalteButton } from "@kobalte/core";
import { type VariantProps } from "class-variance-authority";
import type { Component } from "solid-js";
import { twCva } from "../../utils/twCva";

export const buttonClass = twCva(["btn", "btn-square", "bg-red-600"], {
  defaultVariants: {
    isLoading: false,
  },
  variants: {
    isLoading: {
      false: [],
      true: ["loading"],
    },
  },
});

type ButtonProps = VariantProps<typeof buttonClass>;

export const Button: Component<KobalteButton.ButtonRootProps & ButtonProps> = (
  props
) => {
  return (
    <KobalteButton.Root
      {...props}
      class={buttonClass({ class: props.class })}
    />
  );
};
