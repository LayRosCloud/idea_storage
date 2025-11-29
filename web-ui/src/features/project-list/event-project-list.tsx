import { formatTimeAgo } from "../../shared/model/format-time-ago";

export function ProjectEventList({ events }: { events: any[] }) {
  return (
    <main className="w-250 bg-white mt-5 overflow-y-auto p-6">
      <div className="h-full flex flex-col">
        <h1 className="font-bold text-2xl">События</h1>
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col border p-5 rounded-[10px]"
            >
              <div className="flex flex-row">
                <img
                  src={`https://ui-avatars.com/api/?name=${event.user.avatar}&background=3B82F6&color=FFFFFF&size=50`}
                  className="border rounded-full w-[50px] h-[50px] items-center justify-center flex flex-row"
                ></img>
                <div className="flex flex-col ml-2">
                  <h1 className="flex items-center text-lg font-medium">
                    <span>@{event.user.name}</span>
                    <span className="text-gray-500 mx-1 font-normal">
                      в проекте
                    </span>
                    <span className="font-semibold">{event.projectName}</span>
                  </h1>

                  <h3 className="text-[12px] mt-[-5px]">{event.user.role}</h3>
                  <div className="tooltip">
                    <p className="text-[12px] mt-[-5px] text-gray-500">
                      {formatTimeAgo(event.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
              <p>
                <span className="text-gray-500 mr-1 font-normal">
                  Было изменено описание
                </span>
                {event.description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            В ваших проектах ещё не было изменений
          </p>
        )}
      </div>
    </main>
  );
}
