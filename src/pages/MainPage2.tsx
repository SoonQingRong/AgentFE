import TabsNavigation from "../components/TabsNavigation";
import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import AboutFrontend from "../components/views/AboutFrontend";
import APGFrontend from "../components/views/APGFrontend";
import MPSFrontend from "../components/views/MPSFrontend";
import SABFrontend from "../components/views/SABFrontend";
import C3Assistant from "../components/views/C3Assistant";
import theme from "../theme";

const MainPage2: React.FC = () => {
  const tabs = [
    { label: "About", value: 0 },
    { label: "APG", value: 1 },
    { label: "MPS", value: 2 },
    { label: "SAB", value: 3 },
  ];

  const [tabValue, setTabValue] = useState<number | string>(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLeftTabChange = (
    event: React.SyntheticEvent,
    newValue: number | string
  ) => {
    setTabValue(newValue);
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="10px"
      >
        <TabsNavigation
          value={tabValue}
          onChange={handleLeftTabChange}
          tabs={tabs}
        />
        <Tabs value={false}>
          <Tab
            label="C3 Assistant"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            sx={{
              textTransform: "none",
              color: sidebarOpen
                ? theme.palette.text.secondary
                : theme.palette.text.primary,
            }}
          />
        </Tabs>
      </Box>

      <Box display="flex" overflow="hidden">
        <Box>
          {tabValue === 0 && <AboutFrontend />}
          {tabValue === 1 && <APGFrontend />}
          {tabValue === 2 && <MPSFrontend />}
          {tabValue === 3 && <SABFrontend />}
        </Box>

        {sidebarOpen && (
          <Box
            sx={{
              background: theme.palette.background.default,
              border: `1px solid ${theme.palette.primary.main}`,
              position: "absolute",
              right: "0px",
              width: "400px",
              height: "calc(100% - 58px)", // component height is 48px and margin bottom is 10px
              zIndex: 1300,
            }}
          >
            <C3Assistant />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainPage2;
