import React from "react";
import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFilter } from "@/store/message/filterReducer";

type TabGroupProps = {
  tab1: string;
  tab2: string;
};

export const MessageControllerTabs = ({
  tab1,
  tab2,
}: TabGroupProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const handleValueChange = (value: string) => {
    dispatch(setFilter({ filter: value }));
  };
  const filter = useAppSelector((state) => state.filter.filter);

  return (
    // <div></div>
    <Tabs
      defaultValue={filter}
      onValueChange={(value) => handleValueChange(value)}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="all">{tab1}</TabsTrigger>
        <TabsTrigger value="unread">{tab2}</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
