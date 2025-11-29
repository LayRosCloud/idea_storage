import { useEventQuery, useProjectQuery } from "./use-project-query";
import { Link } from "react-router-dom";
import { ProjectEventList } from "./event-project-list";
import { LeftMenu } from "./left-menu";
import { EventSiteList } from "./event-site-list";

function ProjectsListPage() {
  const items = useProjectQuery();
  const events = useEventQuery();
  return (
    <div className="flex h-screen">
      <LeftMenu
        header="Ваши проекты"
        placeholder="Поиск по проектам"
        itemsList={items.map((item) => (
          <Link
            key={item.id}
            to={`/${item.id}`}
            className="block border border-gray-200 p-4 rounded-lg bg-white hover:shadow-sm transition-shadow"
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{item.concept}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {item.tags.map((tag: any) => (
                <span
                  key={tag.id}
                  className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                >
                  {!tag.name.startsWith("#") && "#"}
                  {tag.name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      />
      <ProjectEventList events={events} />

      <EventSiteList />
    </div>
  );
}

export const Component = ProjectsListPage;
