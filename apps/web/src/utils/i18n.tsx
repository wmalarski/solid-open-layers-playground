import {
  createI18nContext,
  I18nContext,
  useI18n,
} from "@solid-primitives/i18n";
import type { Component, JSX } from "solid-js";

const dict = {
  en: {
    editor: {
      pencil: "Pencil",
      selectTool: "Select Tool",
      selector: "Selector",
    },
    home: {
      hello: "hello123",
      title: "Title",
    },
    scan: {
      hello: "hello123",
      title: "Scan",
    },
    scans: {
      hello: "hello123",
      title: "Scans",
    },
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

export const useTranslation = (ns: string) => {
  const [translate, options] = useI18n();

  const t = (
    key: string,
    params?: Record<string, string> | undefined,
    defaultValue?: string | undefined
  ) => {
    return translate(`${ns}.${key}`, params, defaultValue);
  };

  return { t, ...options };
};
