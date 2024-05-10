import moment from "moment";
import { RxAvatar as Avatar } from "react-icons/rx";

import { NotificationItemProps } from "../types/notification.types";

export function NotificationItem(props: NotificationItemProps) {
  return (
    <div className="flex items-center justify-start gap-4">
      {props.image ? (
        <img src={props.image} className="w-10 h-10 rounded-full" />
      ) : (
        <Avatar color="black" size="40px" />
      )}

      <div>
        <p className="text-gray-500 text-sm">
          {props.fullName && (
            <b className="text-black text-sm">{props.fullName} </b>
          )}
          {props.content}
        </p>
        <label className="text-gray-400 text-[12px]">
          {moment(props.date).format("MMMM d, YYYY")}
        </label>
      </div>
    </div>
  );
}
