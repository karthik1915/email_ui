import Logo, { ExtendedSVGProps } from "@/assets/logo";
import React from "react";
import { IconType } from "react-icons";

import { LuInbox } from "react-icons/lu";
import { IoDocumentOutline } from "react-icons/io5";
import { TbSend } from "react-icons/tb";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { IoMdArchive } from "react-icons/io";

interface SideBarOptionsProps {
  Icon: IconType;
  option: string;
  value?: number | string;
}

interface SideBarContentProps {
  heading: string;
  logo: React.FC<ExtendedSVGProps>;
  options: SideBarOptionsProps[];
}

const SideBarContent: SideBarContentProps = {
  heading: "Zeuss Trader",
  logo: Logo,
  options: [
    {
      Icon: LuInbox,
      option: "inbox",
      value: 0,
    },
    {
      Icon: IoDocumentOutline,
      option: "Draft",
    },
    {
      Icon: TbSend,
      option: "sent",
      value: 22,
    },

    {
      Icon: HiOutlineArchiveBoxXMark,
      option: "trash",
      value: 22,
    },
    {
      Icon: IoMdArchive,
      option: "archive",
      value: 22,
    },
  ],
};

export default SideBarContent;
