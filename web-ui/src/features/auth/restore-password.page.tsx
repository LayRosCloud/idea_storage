import { AuthLayout } from "./ui/auth-layout";
import { RestorePasswordForm } from "./ui/restore-password-form";

export function VerifyCodePage() {
  return <AuthLayout title="Восстановление" form={<RestorePasswordForm />} />;
}

export const Component = VerifyCodePage;
