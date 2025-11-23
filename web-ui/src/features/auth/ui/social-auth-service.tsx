import { Button } from "@/shared/ui/kit/button";

export function SocialAuthService() {
  return (
    <>
      <div className="auth-divider">
        <span>или</span>
      </div>
      <div className="gap-2 flex-col flex w-100">
        <Button variant="secondary">
          <img src="/google-logo.svg" alt="google logo" className="w-5" />
          Войти через Google
        </Button>
        <Button variant="secondary">
          <img src="/github.svg" alt="google logo" className="w-5" />
          Войти через Github
        </Button>
      </div>
    </>
  );
}
