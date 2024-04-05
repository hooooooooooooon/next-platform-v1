import Button from "@/components/button";
import Input from "@/components/input";
import SocialSignin from "@/components/social-sign-in";
import { PW_MIN_LENGTH } from "@/lib/constants";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">이메일을 통해 로그인해주세요.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input name="email" type="email" placeholder="  이메일" required />
        <Input
          name="password"
          type="password"
          placeholder="  비밀번호"
          required
          minLength={PW_MIN_LENGTH}
        />
        <Button text="로그인" />
      </form>
      <SocialSignin />
    </div>
  );
}
