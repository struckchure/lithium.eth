import { NotificationItem } from "./components/notifications-item.component";
import { NotificationItemProps } from "./types/notification.types";

export function NotificationsPage() {
  const notifications: NotificationItemProps[] = Array(5).fill({
    image:
      "https://miro.medium.com/v2/resize:fill:112:112/0*MtwTqI-HM95Lr2SR.jpg",
    fullName: "John",
    content: "started following you",
    date: new Date().toISOString(),
  });

  return (
    <div>
      <h4 className="font-semibold text-4xl border-b-[1px] border-gray-200 pb-6">
        Notifications
      </h4>

      <div className="flex flex-col items-start justify-start gap-10 p-10 w-full">
        {notifications.length === 0 && (
          <label className="text-lg text-gray-600 mx-auto">
            Nothing to see here.
          </label>
        )}

        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </div>
    </div>
  );
}
