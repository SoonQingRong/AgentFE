import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import AgentSelectorDropDown from "./AgentSelectorDropdown";

interface AgentSelectorProps {
  timeBetweenCharactersDisplayInMS: number;
  onComponentUpdate: () => void;
  prompt: string;
  sidebarDelayInSeconds: number;
  agentOptions: string[];
  onAgentChange: (agent: string) => void;
}

const AgentSelector: React.FC<AgentSelectorProps> = ({
  timeBetweenCharactersDisplayInMS,
  onComponentUpdate,
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
        if (onComponentUpdate) {
          onComponentUpdate();
        }
        if (index >= prompt.length) {
          clearInterval(interval);
          setTimeout(() => setShowDropdown(true), 300); // delay dropdown
        }
      }, timeBetweenCharactersDisplayInMS);
    }, animationDelay);
    return () => {
      clearTimeout(timeout);
    };
  }, [
    prompt,
    sidebarDelayInSeconds,
    timeBetweenCharactersDisplayInMS,
    onComponentUpdate,
  ]);

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
            onComponentUpdate={onComponentUpdate}
            agentOptions={agentOptions}
            onAgentChange={onAgentChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default AgentSelector;
