import { createForm, Field, Form } from "@modular-forms/solid";
import { Button } from "@sol/ui/components/Button";
import { Input } from "@sol/ui/components/Input";
import { type Component } from "solid-js";
import { useTranslation } from "~/utils/i18n";

export type SignUpData = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (data: SignUpData) => void;
};

export const SignUpForm: Component<Props> = (props) => {
  const { t } = useTranslation("auth");

  const signUp = createForm<SignUpData>();

  return (
    <Form of={signUp} onSubmit={props.onSubmit}>
      <Field of={signUp} name="email">
        {(field) => <Input {...field.props} type="email" />}
      </Field>
      <Field of={signUp} name="password">
        {(field) => <Input {...field.props} type="password" />}
      </Field>
      <Button>{t("signUp.button")}</Button>
    </Form>
  );
};
