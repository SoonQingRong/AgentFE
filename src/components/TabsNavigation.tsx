import React, { useState } from "react";
import { Tabs, Tab, Box, Container } from "@mui/material";
import AboutPage from "./AboutPage";
import AgentSelector from "./AgentSelector";
import AlternatePage from "./AlternatePage";
import theme from "../theme";

const TabsNavigation: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
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
        <Tab
          label="About"
          sx={{
            "&.Mui-selected": {
              color: theme.palette.text.secondary,
              textTransform: "none",
            }, //text when tab is selected
          }}
        />
        <Tab
          label="Agent Selector"
          sx={{
            "&.Mui-selected": {
              color: theme.palette.text.secondary,
              textTransform: "none",
            },
          }}
        />
        <Tab
          label="TS Frontend"
          sx={{
            "&.Mui-selected": {
              color: theme.palette.text.secondary,
              textTransform: "none",
            },
          }}
        />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {tabIndex === 0 && <AboutPage />}
        {tabIndex === 1 && <AgentSelector />}
        {tabIndex === 2 && <AlternatePage />}
      </Box>
    </Container>
  );
};

export default TabsNavigation;
