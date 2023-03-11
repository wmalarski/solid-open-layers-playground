import type { Component } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";

type Props = {
  children?: JSX.Element;
};

export const Button: Component<Props> = (props) => {
  return <button class="btn">{props.children}</button>;
};
