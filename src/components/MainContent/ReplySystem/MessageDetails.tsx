import React from "react";
import { MessageType } from "@/constants/MessageTypes";
import { getInitials } from "@/utils/getInitials";
import { DateTimeUtils } from "@/utils/timeAndDate";
import { stringToDate } from "@/utils/DateString";

const MessageDetails: React.FC<{ message: MessageType }> = ({ message }) => {
  const DataAndTime = new DateTimeUtils(stringToDate(message.timestamp));
  return (
    <div className="h-auto border-b border-border flex items-start justify-between p-4">
      <div className="flex gap-3 items-start">
        <div className="font-bold py-2.5 px-3 text-lg rounded-full bg-muted">
          {getInitials(message.sender.name)}
        </div>
        <div className="">
          <div className="font-semibold text-lg">{message.sender.name}</div>
          <div className="text-sm text-muted-foreground">
            {message.sender.phone}
          </div>
          <div className="text-sm">{`Reply-To: ${message.sender.email}`}</div>
        </div>
      </div>
      <div className="flex gap-2 text-sm text-muted-foreground flex-wrap">
        <p>{DataAndTime.getTimeFromDate()}</p>
        <p>{DataAndTime.getDateFormatted()}</p>
      </div>
    </div>
  );
};

export default MessageDetails;
