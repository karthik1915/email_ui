import React, { useEffect } from "react";
import DraggableSidebar from "./components/ui/draggableSidebar";
import fetchMessages from "@/api/fetchMessages";
import { useAppDispatch } from "./store/hooks";
import MainContent from "./components/MainContent/mainContent";

function App(): React.ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div className="border border-border flex w-full h-full rounded-lg bg-background text-foreground">
      <DraggableSidebar />
      <MainContent />
    </div>
  );
}

export default App;
