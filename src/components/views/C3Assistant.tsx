import React from "react";
import { Box, Typography } from "@mui/material";
import AgentSelector from "../AgentSelector";

const C3Assistant: React.FC = () => {
  return (
    <Box sx={{ padding: "10px" }}>
      <Typography variant="h5" gutterBottom>
        Welcome to C3 Assistant
      </Typography>
      <AgentSelector />
    </Box>
  );
};

export default C3Assistant;
