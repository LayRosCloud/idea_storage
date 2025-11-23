import { Routes } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import clsx from "clsx";
import { Link } from "react-router-dom";

export function CtaSection({ className }: { className?: string }) {
  return (
    <section className={clsx("mx-auto max-w-7xl flex flex-col", className)}>
      <h1 className="text-5xl font-semibold">Хватит терять время!</h1>
      <p className="text-2xl">
        Начните свой проект прямо сейчас. Без регистрации. Без шаблонов.
      </p>
      <Link to={Routes.LOGIN} className="ml-auto">
        <Button variant="primary" className="text-2xl px-10 py-7 mt-5">
          Создать первую идею!
        </Button>
      </Link>
    </section>
  );
}
