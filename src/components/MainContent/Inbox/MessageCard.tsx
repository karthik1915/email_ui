import React from "react";
import { MessageType } from "@/constants/MessageTypes";
import { getRelativeTime } from "@/utils/getRelativeTime";
import { useAppDispatch } from "@/store/hooks";
import { selectMessage } from "@/store/selectedmessage/selectedMessageReducer";
import { stringToDate } from "@/utils/DateString";

const MessageCard: React.FC<{ message: MessageType }> = ({ message }) => {
  const { id, sender, body, timestamp, status } = message;
  const dispatch = useAppDispatch();

  return (
    <div
      key={id}
      onClick={() => {
        dispatch(selectMessage(id));
      }}
      className="cursor-pointer hover:bg-card rounded-lg bg-background text-card-foreground border border-border shadow-sm p-4 mb-4"
    >
      <div className="flex items-start justify-between space-y-1.5 mb-3">
        <div>
          <div className="flex gap-2 items-center text-xl font-semibold leading-none tracking-tight">
            {sender.name}
            {status === "unread" && (
              <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
            )}
          </div>
          <div className="text-sm text-muted-foreground">{sender.email}</div>
        </div>
        <div className="">{getRelativeTime(stringToDate(timestamp))}</div>
      </div>
      <div className="text-muted-foreground line-clamp-2 text-sm">{body}</div>
      <div className="mt-3">{sender.phone}</div>
    </div>
  );
};

export default MessageCard;
