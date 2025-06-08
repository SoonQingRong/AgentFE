import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import TabsNavigation from "../components/TabsNavigation";
import AboutView from "../components/views/AboutView";
import C3Assistant from "../components/views/C3Assistant";
import AlternatePageView from "../components/views/AlternatePageView";

const tabs = [
  { label: "About", value: 0 },
  { label: "C3 Assistant", value: 1 },
  { label: "TS Frontend", value: 2 },
];

const MainPage: React.FC = () => {
  const [tabValue, setTabValue] = useState<number | string>(0);

  const handleTabChange = (
    event: React.SyntheticEvent,
    newValue: number | string
  ) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
      <TabsNavigation value={tabValue} onChange={handleTabChange} tabs={tabs} />

      <Box sx={{ marginTop: "10px" }}>
        {tabValue === 0 && <AboutView />}
        {tabValue === 1 && <C3Assistant />}
        {tabValue === 2 && <AlternatePageView />}
      </Box>
    </Container>
  );
};

export default MainPage;
