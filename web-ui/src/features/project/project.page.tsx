import { Link, Outlet, useMatches } from "react-router-dom";
import { LeftMenu } from "../project-list";
import { useFragmentQuery } from "./use-fragment-query";
import { Button } from "@/shared/ui/kit/button";

function ProjectPage() {
  const items = useFragmentQuery();
  const matches = useMatches();
  const currentHandle = matches.find((match) => (match as any).handle?.sidebar);
  const sidebarContent = currentHandle
    ? (currentHandle as any).handle.sidebar
    : null;
  return (
    <div className="flex flex-1 justify-between">
      <div className="flex flex-row">
        <LeftMenu
          header="Ваши фрагменты в VoiceTok"
          placeholder="Поиск по фрагментам"
          className="mr-5"
          itemsList={items.map((item) => (
            <Link
              key={item.id}
              to={`/`}
              className="block border border-gray-200 p-4 rounded-lg bg-white hover:shadow-sm transition-shadow"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.concept}</p>
            </Link>
          ))}
        />
        <main className="mt-5 flex flex-col">
          <div className="flex flex-row gap-1 mb-3">
            <Button variant="outline">Описание</Button>
            <Button variant="outline">Доска</Button>
            <Button variant="outline">Задачи</Button>
          </div>
          <Outlet />
        </main>
      </div>

      <aside className="border">{sidebarContent}</aside>
    </div>
  );
}

export const Component = ProjectPage;
