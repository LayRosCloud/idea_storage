import { Routes } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import clsx from "clsx";
import { Link } from "react-router-dom";

export function HeroSection({ className }: { className?: string }) {
  return (
    <section className={clsx("text-center", className)}>
      <h1 className="text-5xl font-semibold">Где идеи не теряют контекст</h1>
      <p className="text-2xl">
        Не копируйте UseFlow из Miro в Notion. <br />
        Проектируйте, обсуждайте и экспортируйте в Jira — в одном месте.
      </p>
      <Link to={Routes.LOGIN}>
        <Button variant="primary" className="text-2xl px-10 py-7 mt-5">
          Хочу попробовать!
        </Button>
      </Link>
    </section>
  );
}
