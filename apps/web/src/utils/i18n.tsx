import { createI18nContext, I18nContext } from "@solid-primitives/i18n";
import type { Component, JSX } from "solid-js";

const dict = {
  en: {
    hello: "hello {{ name }}, how are you?",
  },
};
const value = createI18nContext(dict, "en");

type Props = {
  children: JSX.Element;
};

export const I18nProvider: Component<Props> = (props) => {
  return (
    <I18nContext.Provider value={value}>{props.children}</I18nContext.Provider>
  );
};
