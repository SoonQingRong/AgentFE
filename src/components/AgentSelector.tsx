import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import AgentSelectorDropDown from "./AgentSelectorDropdown";

interface AgentSelectorProps {
  prompt: string;
  sidebarDelayInSeconds: number;
  agentOptions: string[];
  onAgentChange: (agent: string) => void;
}

const AgentSelector: React.FC<AgentSelectorProps> = ({
  prompt,
  sidebarDelayInSeconds,
  agentOptions,
  onAgentChange,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const animationDelay = sidebarDelayInSeconds * 1000;

    const timeout = setTimeout(() => {
      let index = 0;
      setDisplayedText("");
      setShowDropdown(false);

      const interval = setInterval(() => {
        setDisplayedText(prompt.slice(0, index + 1));
        index++;
        if (index >= prompt.length) {
          clearInterval(interval);
          setTimeout(() => setShowDropdown(true), 300); // delay dropdown
        }
      }, 20);
    }, animationDelay);
    return () => {
      clearTimeout(timeout);
    };
  }, [prompt, sidebarDelayInSeconds]);

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
          <AgentSelectorDropDown
            agentOptions={agentOptions}
            onAgentChange={onAgentChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default AgentSelector;
