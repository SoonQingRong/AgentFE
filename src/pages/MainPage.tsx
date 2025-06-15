import TabsNavigation from "../components/TabsNavigation";
import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import AboutFrontend from "../components/views/AboutFrontend";
import APGFrontend from "../components/views/APGFrontend";
import MPSFrontend from "../components/views/MPSFrontend";
import SABFrontend from "../components/views/SABFrontend";
import C3AssistantSidebar from "../components/C3AssistantSidebar";
import theme from "../theme";

const MainPage: React.FC = () => {
  const tabs = [
    { label: "About", value: 0 },
    { label: "APG", value: 1 },
    { label: "MPS", value: 2 },
    { label: "SAB", value: 3 },
  ];

  const sidebarDelayInSeconds = 0.5;

  const [tabValue, setTabValue] = useState<number | string>(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [agentAssistantKey, setAgentAssistantKey] = useState(0);

  const handleTabChange = (
    event: React.SyntheticEvent,
    newValue: number | string
  ) => {
    setTabValue(newValue);
  };

  const handleSidebarClick = () => {
    if (!sidebarOpen) {
      setAgentAssistantKey((prev) => prev + 1);
    }
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      sx={{ overflowX: "hidden", position: "relative" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="10px"
      >
        <TabsNavigation
          value={tabValue}
          onChange={handleTabChange}
          tabs={tabs}
        />
        <Tabs value={false}>
          <Tab
            label="C3 Assistant"
            onClick={handleSidebarClick}
            sx={{
              textTransform: "none",
              color: sidebarOpen
                ? theme.palette.text.secondary
                : theme.palette.text.primary,
            }}
          />
        </Tabs>
      </Box>

      <Box display="flex" overflow="hidden" sx={{ justifyContent: "center" }}>
        <Box>
          {tabValue === 0 && <AboutFrontend />}
          {tabValue === 1 && <APGFrontend />}
          {tabValue === 2 && <MPSFrontend />}
          {tabValue === 3 && <SABFrontend />}
        </Box>

        <C3AssistantSidebar
          sidebarOpen={sidebarOpen}
          sidebarDelayInSeconds={sidebarDelayInSeconds}
          agentAssistantKey={agentAssistantKey}
        />
      </Box>
    </Box>
  );
};

export default MainPage;
