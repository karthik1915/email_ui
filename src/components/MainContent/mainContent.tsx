import React, { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ReplySystem from "./ReplySystem";
import Inbox from "./Inbox";
import { useAppSelector } from "@/store/hooks";

const MainContent: React.FC = () => {
  const messages = useAppSelector((state) => state.message.messages);
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setDirection("vertical");
    } else {
      setDirection("horizontal");
    }
  };

  useEffect(() => {
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <ResizablePanelGroup direction={direction}>
        <ResizablePanel defaultSize={55} minSize={35}>
          <Inbox messagesArray={messages} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <ReplySystem />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default MainContent;
