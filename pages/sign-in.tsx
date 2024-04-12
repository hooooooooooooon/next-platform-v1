import Button from "@/components/button";
import Input from "@/components/input";
import SocialSignin from "@/components/social-sign-in";
import useMutation from "@/lib/client/useMutation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SignInForm {
  email: string;
  password: string;
  errors?: string;
}

export default function SignIn() {
  const [singIn, { loading, data, error }] = useMutation("/api/users/sign-in");
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({ mode: "onBlur" });
  const [method, setMethod] = useState();
  const onValid = (validForm: SignInForm) => {
    if (loading) return;
    singIn(validForm);
  };
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">이메일을 통해 로그인해주세요.</h2>
      </div>
      <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-3">
        <Input
          register={register("email", { required: true })}
          name="이메일"
          type="text"
          required
        />
        {errors.email?.message}
        <Input
          register={register("password", { required: true })}
          name="비밀번호"
          type="password"
          required
        />
        <Button text={loading ? "로딩중" : "로그인"} />
        {errors.errors?.message}
      </form>
      <SocialSignin />
    </div>
  );
}
