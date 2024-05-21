import React from "react";
import { MessageControllerTabs } from "../TabGroups";
import MessageCard from "./MessageCard";
import { MessageType } from "@/constants/MessageTypes";
import MessageCardSkeleton from "./MessageCardSkeleton";
import { useAppSelector } from "@/store/hooks";
import { ScrollArea } from "@/components/ui/scroll-area";

const Inbox: React.FC<{ messagesArray: MessageType[] }> = ({
  messagesArray,
}) => {
  const messages = messagesArray;
  const filterState = useAppSelector((state) => state.filter.filter);
  const filteredMessages = messagesArray.filter((message) => {
    if (filterState === "all") return true;
    return message.status === filterState;
  });
  return (
    <>
      <div className="p-2 border-b border-border font-bold flex items-center justify-between">
        <div className="text-xl">Inbox</div>
        <div>
          <MessageControllerTabs tab1="All Messages" tab2="Unread" />
        </div>
      </div>
      <ScrollArea className="px-5 py-6 h-full">
        {messages.length === 0 ? (
          <>
            <MessageCardSkeleton />
            <MessageCardSkeleton />
            <MessageCardSkeleton />
          </>
        ) : (
          filteredMessages.map((message, index) => (
            <MessageCard key={index} message={message} />
          ))
        )}
      </ScrollArea>
    </>
  );
};

export default Inbox;
