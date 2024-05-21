import { Button } from "@/components/ui/button";
import React from "react";

const MessageActions = ({ name }: { name: string }): React.ReactElement => {
  return (
    <div className="h-auto border-t border-border p-3 flex flex-col justify-between gap-4">
      <textarea
        rows={4}
        placeholder={`reply to ${name}`}
        className="p-2 w-full h-1/2 bg-background border border-border rounded-lg"
      />
      <div className="flex items-center justify-between">
        <div></div>
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default MessageActions;
