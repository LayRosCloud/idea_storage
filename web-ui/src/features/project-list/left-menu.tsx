import clsx from "clsx";
import { useState } from "react";

export function LeftMenu({
  itemsList,
  header,
  placeholder,
  className,
}: {
  itemsList: React.ReactNode[];
  header: string;
  placeholder: string;
  className?: string;
}) {
  const [visibleSearchField, setVisibleSearchField] = useState(false);
  return (
    <aside className={clsx("w-80 border-r flex flex-col", className)}>
      <div className="p-5 border-b">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-medium">{header}</h2>
          <div className="tooltip">
            <button
              onClick={() => setVisibleSearchField(!visibleSearchField)}
              className="p-1 hover:bg-gray-100 rounded-full transition"
            >
              <img
                src={visibleSearchField ? "/arrow-bottom.svg" : "/search.svg"}
                className="w-5 h-5"
                alt="Toggle search"
              />
            </button>
            <span className="tooltip-text">
              {visibleSearchField ? "Закрыть поиск" : "Открыть поиск"}
            </span>
          </div>
        </div>

        {visibleSearchField && (
          <input
            type="text"
            placeholder={placeholder}
            className="w-full border rounded px-3 py-2 mt-2"
          />
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-3">{itemsList}</div>
    </aside>
  );
}
