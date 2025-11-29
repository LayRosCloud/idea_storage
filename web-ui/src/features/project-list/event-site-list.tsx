import { Link } from "react-router-dom";

export function EventSiteList() {
  return (
    <aside className="flex flex-col border rounded-2xl max-h-50 p-3 mt-15 w-80">
      <div>
        <h2 className="font-medium">Лента событий</h2>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4">
        <Link to="/">Показать ещё</Link>
      </div>
    </aside>
  );
}
