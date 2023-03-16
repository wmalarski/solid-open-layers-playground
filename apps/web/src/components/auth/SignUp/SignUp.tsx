import { SignUpForm, type SignUpData } from "./SignUpForm/SignUpForm";

export const SignUp = () => {
  const onSubmit = (data: SignUpData) => {
    console.log({ data });
    //
  };

  return <SignUpForm onSubmit={onSubmit} />;
};
