"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import SideBarContent from "@/constants/sidebar";
import {
  TooltipTrigger,
  Tooltip,
  TooltipProvider,
  TooltipContent,
} from "./tooltip";

const MIN_WIDTH = 60;
const MAX_WIDTH = 220;
const COLLAPSE_WIDTH = 60;
const SM_BREAKPOINT = 640; // Tailwind CSS sm breakpoint in pixels

function DraggableSidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(220);

  const startResizing = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault(); // Prevent text selection
      setIsResizing(true);
    },
    []
  );

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const [showFullTitle, setShowFullTitle] = useState(false);
  const [showFullOptions, setShowFullOptions] = useState(false);

  const resize = useCallback(
    (moveEvent: MouseEvent | TouchEvent) => {
      if (isResizing && sidebarRef.current) {
        const clientX =
          moveEvent instanceof MouseEvent
            ? moveEvent.clientX
            : moveEvent.touches[0].clientX;

        const newWidth =
          clientX - sidebarRef.current.getBoundingClientRect().left;
        const clampedWidth = Math.min(Math.max(newWidth, MIN_WIDTH), MAX_WIDTH);
        setSidebarWidth(clampedWidth);
        setShowFullTitle(clampedWidth < 192);
        setShowFullOptions(clampedWidth < 140);
      }
    },
    [isResizing]
  );

  const collapseSidebar = useCallback(() => {
    setSidebarWidth(COLLAPSE_WIDTH);
    setShowFullTitle(true);
    setShowFullOptions(true);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth < SM_BREAKPOINT) {
      collapseSidebar();
    }
  }, [collapseSidebar]);

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("touchmove", resize);
    window.addEventListener("mouseup", stopResizing);
    window.addEventListener("touchend", stopResizing);
    window.addEventListener("resize", handleResize);

    handleResize(); // Initial check on mount

    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("touchmove", resize);
      window.removeEventListener("mouseup", stopResizing);
      window.removeEventListener("touchend", stopResizing);
      window.removeEventListener("resize", handleResize);
    };
  }, [resize, stopResizing, handleResize]);

  return (
    <div
      ref={sidebarRef}
      style={{ width: sidebarWidth }}
      className="min-w-[60px] h-full relative max-w-[220px] flex flex-col z-[2]"
    >
      <div className="text-white border-b border-border">
        <div className="flex m-2 border border-border rounded-lg p-1 py-[7px] items-center justify-center gap-3 text-lg font-semibold text-foreground">
          {
            <SideBarContent.logo
              width={24}
              height={24}
              fill1="#f2f2f2"
              fill2="#fafafa"
            />
          }
          <div className={`${showFullTitle ? "hidden" : "block"} `}>
            {SideBarContent.heading}
          </div>
        </div>
      </div>
      <TooltipProvider>
        <div className="font-semibold capitalize px-2">
          {SideBarContent.options.map((option, i) => {
            return (
              <Tooltip key={i}>
                <TooltipTrigger
                  className={`flex w-full  ${
                    showFullOptions ? "justify-center" : "justify-between"
                  } cursor-pointer items-end px-2 rounded-lg hover:bg-secondary my-2 py-2`}
                >
                  <div className="flex gap-3 justify-start items-center ">
                    <div className="">
                      {
                        <option.Icon
                          strokeWidth={2}
                          size={showFullOptions ? "1.5em" : "1.3em"}
                        />
                      }
                    </div>
                    <div
                      className={`text-foreground  ${
                        showFullOptions ? "hidden" : "block"
                      }`}
                    >
                      {option.option}
                    </div>
                  </div>

                  <div
                    className={`font-bold ${
                      showFullOptions ? "hidden" : "block"
                    } `}
                  >
                    {option.value}
                  </div>
                  {/* </div> */}
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{option.option}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
      <div
        onMouseDown={startResizing}
        onTouchStart={startResizing}
        className="w-0 border-r border-border cursor-ew-resize flex items-center justify-center"
        style={{ position: "absolute", top: 0, right: 0, bottom: 0 }}
      >
        <div className="py-[2px] border border-border rounded-sm  ">
          <DragHandleDots2Icon
            className="h-3 w-3"
            stroke="white"
            strokeWidth={0.4}
          />
        </div>
      </div>
    </div>
  );
}

export default DraggableSidebar;
