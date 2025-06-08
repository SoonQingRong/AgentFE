import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import TabsNavigation from "../components/TabsNavigation";
import AboutFrontend from "../components/views/AboutFrontend";
import APGFrontend from "../components/views/APGFrontend";
import MPSFrontend from "../components/views/MPSFrontend";
import SABFrontend from "../components/views/SABFrontend";
import C3Assistant from "../components/views/C3Assistant";

const MainPage: React.FC = () => {
  const tabs = [
    { label: "About", value: 0 },
    { label: "APG", value: 1 },
    { label: "MPS", value: 2 },
    { label: "SAB", value: 3 },
    { label: "C3 Assistant", value: 4 },
  ];

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
        {tabValue === 0 && <AboutFrontend />}
        {tabValue === 1 && <APGFrontend />}
        {tabValue === 2 && <MPSFrontend />}
        {tabValue === 3 && <SABFrontend />}
        {tabValue === 4 && <C3Assistant />}
      </Box>
    </Container>
  );
};

export default MainPage;
