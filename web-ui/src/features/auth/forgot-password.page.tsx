import { AuthLayout } from "./ui/auth-layout";
import { ForgotPasswordForm } from "./ui/forgot-password-form";

export function VerifyCodePage() {
  return <AuthLayout title="Забыли пароль" form={<ForgotPasswordForm />} />;
}

export const Component = VerifyCodePage;
