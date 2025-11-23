import { AuthLayout } from "./ui/auth-layout";
import { VerifyCodeForm } from "./ui/verify-form";

export function VerifyCodePage() {
  return (
    <AuthLayout
      title="Подтвердите аккаунт"
      form={<VerifyCodeForm />}
      footerText={<>Вам был отправлен код на почту.</>}
    />
  );
}

export const Component = VerifyCodePage;
