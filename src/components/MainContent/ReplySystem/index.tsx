import React from "react";
// import { MessageType } from "@/constants/MessageTypes";
import MessageOptions from "./MessageOptions";
import MessageDetails from "./MessageDetails";
import MessageActions from "./MessageActions";
import { useAppSelector } from "@/store/hooks";
import { findMessageById } from "@/utils/findMessageById";
import ReplySystemSkeleton from "./skeleton";

const ReplySystem = (): React.ReactElement => {
  const messages = useAppSelector((state) => state.message.messages);
  const selectedMessage = useAppSelector((state) => state.selectedMessage.id);
  const message =
    selectedMessage !== null && findMessageById(messages, selectedMessage);

  if (typeof message === "undefined") {
    return <div></div>;
  }

  return (
    <div className="flex flex-col h-full">
      {selectedMessage !== null && message !== false ? (
        <>
          <MessageOptions />
          <div className="flex flex-col flex-grow">
            <MessageDetails message={message} />
            <div className="flex-grow px-4 py-5">{message.body}</div>
            <MessageActions name={message.sender.name} />
          </div>
        </>
      ) : (
        <ReplySystemSkeleton />
      )}
    </div>
  );
};

export default ReplySystem;
