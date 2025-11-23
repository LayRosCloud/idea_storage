import { AuthLayout } from "./ui/auth-layout";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/model/routes";
import { SignupForm } from "./ui/signup-form";
import { SocialAuthService } from "./ui/social-auth-service";

export function SignupPage() {
  return (
    <AuthLayout
      title="Регистрация"
      form={<SignupForm />}
      footerSocial={<SocialAuthService />}
      footerText={
        <>
          Уже есть аккаунт на Protobin? <Link to={Routes.LOGIN}>Войти</Link>
        </>
      }
    />
  );
}

export const Component = SignupPage;
