import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

interface AgentToolsDisplayProps {
  timeBetweenCharactersDisplayInMS: number;
  onComponentUpdate: () => void;
  selectedRoles: string[];
  responsibilitiesByRole: Record<string, string[]>;
  toolsByResponsibility: Record<string, string[]>;
}

const AgentToolsDisplay: React.FC<AgentToolsDisplayProps> = ({
  timeBetweenCharactersDisplayInMS,
  onComponentUpdate,
  selectedRoles,
  responsibilitiesByRole,
  toolsByResponsibility,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  const toolSet = new Set<string>();

  selectedRoles.forEach((role) => {
    const responsibilities = responsibilitiesByRole[role] || [];
    responsibilities.forEach((responsibility) => {
      toolsByResponsibility[responsibility]?.forEach((tool) =>
        toolSet.add(tool)
      );
    });
  });

  const tools = Array.from(toolSet).sort((a, b) => a.localeCompare(b));
  const toolsDisplayText =
    `Tool(s):\n` +
    tools.map((tool, index) => `${index + 1}) ${tool}`).join("\n");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(toolsDisplayText.slice(0, index + 1));
      index++;
      if (onComponentUpdate) {
        onComponentUpdate();
      }
      if (index >= toolsDisplayText.length) {
        clearInterval(interval);
      }
    }, timeBetweenCharactersDisplayInMS);
    return () => clearInterval(interval);
  }, [toolsDisplayText, timeBetweenCharactersDisplayInMS, onComponentUpdate]);

  return (
    <Box sx={{ padding: "4px", marginTop: "20px" }}>
      <Typography variant="h6" sx={{ whiteSpace: "pre-line" }}>
        {displayedText}
      </Typography>
    </Box>
  );
};

export default AgentToolsDisplay;
