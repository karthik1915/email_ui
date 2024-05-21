import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { deleteMessage } from "@/store/message/messageReducer";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

import React from "react";
import { IconType } from "react-icons";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { IoMdArchive } from "react-icons/io";
// type Props = {}
import { LuReply } from "react-icons/lu";
import { LuReplyAll } from "react-icons/lu";
import { LuForward } from "react-icons/lu";

const MessageOptions = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  return (
    <div className="p-2.5 border-b border-border flex items-center justify-between">
      <TooltipProvider>
        <div className="flex gap-1">
          <MessageActionButton
            tooltip="Delete"
            onClick={(id: string | null) => {
              if (id) dispatch(deleteMessage(id));
            }}
            Icon={FaRegTrashCan}
          />
          <MessageActionButton
            tooltip="Move to trash"
            onClick={() => {}}
            Icon={HiOutlineArchiveBoxXMark}
          />
          <MessageActionButton
            tooltip="Archive"
            onClick={() => {}}
            Icon={IoMdArchive}
          />
        </div>
        <div>
          <MessageActionButton
            tooltip="Reply"
            onClick={() => {}}
            Icon={LuReply}
          />
          <MessageActionButton
            tooltip="Reply All"
            onClick={() => {}}
            Icon={LuReplyAll}
          />
          <MessageActionButton
            tooltip="Forward"
            onClick={() => {}}
            Icon={LuForward}
          />
        </div>
      </TooltipProvider>
    </div>
  );
};

type ActionButtonProps = {
  Icon: IconType;
  onClick: (param: string | null) => void;
  tooltip: string;
};

const MessageActionButton = ({ Icon, onClick, tooltip }: ActionButtonProps) => {
  const id = useAppSelector((state) => state.selectedMessage.id);
  return (
    <Tooltip>
      <TooltipTrigger>
        <button
          className="hover:bg-muted py-2 px-3 rounded-lg"
          onClick={() => onClick(id)}
        >
          <Icon size={20} />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default MessageOptions;
