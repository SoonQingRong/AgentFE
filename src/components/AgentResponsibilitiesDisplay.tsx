import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

interface AgentResponsibilitiesDisplayProps {
  timeBetweenCharactersDisplayInMS: number;
  selectedAgent: string;
  selectedRoles: string[];
  rolesByAgent: Record<string, string[]>;
  responsibilitiesByRole: Record<string, string[]>;
  onResponsibilitiesDisplayDone: () => void;
}

const AgentResponsibilitiesDisplay: React.FC<
  AgentResponsibilitiesDisplayProps
> = ({
  timeBetweenCharactersDisplayInMS,
  selectedAgent,
  selectedRoles,
  rolesByAgent,
  responsibilitiesByRole,
  onResponsibilitiesDisplayDone,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  const fullResponsibilitiesText = rolesByAgent[selectedAgent]
    .filter((role) => selectedRoles.includes(role))
    .flatMap((role) =>
      responsibilitiesByRole[role].map(
        (responsibility) => `${responsibility} (${role})`
      )
    )
    .map((line, idx) => `${idx + 1}) ${line}`)
    .join("\n");

  const responsibilitesDisplayText = `Responsibilities:\n${fullResponsibilitiesText}`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(responsibilitesDisplayText.slice(0, index + 1));
      index++;
      if (index >= responsibilitesDisplayText.length) {
        clearInterval(interval);
        onResponsibilitiesDisplayDone();
      }
    }, timeBetweenCharactersDisplayInMS);
    return () => clearInterval(interval);
  }, [
    responsibilitesDisplayText,
    onResponsibilitiesDisplayDone,
    timeBetweenCharactersDisplayInMS,
  ]);

  return (
    <Box sx={{ padding: "4px", marginTop: "20px" }}>
      <Typography variant="h6" sx={{ whiteSpace: "pre-line" }}>
        {displayedText}
      </Typography>
    </Box>
  );
};

export default AgentResponsibilitiesDisplay;
