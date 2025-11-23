import { Link } from "react-router-dom";
import { AuthLayout } from "./ui/auth-layout";
import { Routes } from "@/shared/model/routes";
import { LoginForm } from "./ui/login-form";
import { SocialAuthService } from "./ui/social-auth-service";

export function LoginPage() {
  return (
    <AuthLayout
      title="Вход"
      form={<LoginForm />}
      footerSocial={<SocialAuthService />}
      footerText={
        <>
          Впервые на Protobin?{" "}
          <Link to={Routes.REGISTER}>Зарегистрироваться</Link>
        </>
      }
    />
  );
}

export const Component = LoginPage;
