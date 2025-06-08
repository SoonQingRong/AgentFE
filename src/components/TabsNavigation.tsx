import React from "react";
import { Tabs, Tab } from "@mui/material";
import theme from "../theme";

interface TabItem {
  label: string;
  value: number | string;
}

interface TabsNavaigationProps {
  value: number | string;
  onChange: (event: React.SyntheticEvent, newValue: number | string) => void;
  tabs: TabItem[];
}

const TabsNavigation: React.FC<TabsNavaigationProps> = ({
  value,
  onChange,
  tabs,
}) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      centered
      sx={{
        "& .MuiTab-root": {
          color: theme.palette.text.primary,
          textTransform: "none",
        }, //tab text

        "& .MuiTabs-indicator": {
          backgroundColor: theme.palette.secondary.main,
        }, //indicator line under tab
      }}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          label={tab.label}
          value={tab.value}
          sx={{
            "&.Mui-selected": {
              color: theme.palette.text.secondary,
              textTransform: "none",
            }, //text when tab is selected
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsNavigation;
