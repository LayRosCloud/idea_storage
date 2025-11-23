import { Routes } from "@/shared/model/routes";
import { useSession } from "@/shared/model/session";
import { Button } from "@/shared/ui/kit/button";
import { InputIcon } from "@/shared/ui/kit/input";
import { Link } from "react-router-dom";

export function AppHeader() {
  const { session, logout } = useSession();

  return (
    <header className="bg-background border-b border-border/40 shadow-sm py-3 px-4">
      <div className="mx-auto flex items-center justify-between">
        <Link to={Routes.HOME} className="flex flex-row items-center">
          <img src="/logo.svg" className="w-[30px]" />
          <h1 className="text-xl font-regular ml-1">Protobin</h1>
        </Link>

        <div className="flex items-center gap-4">
          <InputIcon
            type="text"
            iconSrc="/search.svg"
            placeholder="Поиск по проектам..."
          />
          {session ? (
            <>
              <Button variant="ghost" onClick={logout}>
                Выйти
              </Button>
            </>
          ) : (
            <>
              <Link to={Routes.LOGIN}>
                <Button variant="ghost">Войти</Button>
              </Link>
              <Link to={Routes.REGISTER}>
                <Button variant="outline">Зарегистрироваться</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
