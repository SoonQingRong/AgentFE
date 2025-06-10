import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import AgentSelectorDropDown from "./AgentSelectorDropdown";

interface AgentSelectorProps {
  agentOptions: string[];
}

const AgentSelector: React.FC<AgentSelectorProps> = ({ agentOptions }) => {
  const prompt = "Hi, please select your agent";
  const [displayedText, setDisplayedText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(prompt.slice(0, index + 1));
      index++;
      if (index >= prompt.length) {
        clearInterval(interval);
        setTimeout(() => setShowDropdown(true), 300); // delay dropdown
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        padding: "4px",
      }}
    >
      <Box>
        <Typography variant="h6" gutterBottom>
          {displayedText}
        </Typography>
      </Box>
      {showDropdown && (
        <Box>
          <AgentSelectorDropDown agentOptions={agentOptions} />
        </Box>
      )}
    </Box>
  );
};

export default AgentSelector;
