import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

interface AgentResponsibilitiesDisplayProps {
  selectedAgent: string;
  selectedRoles: string[];
  rolesByAgent: Record<string, string[]>;
  responsibilitiesByRole: Record<string, string[]>;
}

const AgentResponsibilitiesDisplay: React.FC<
  AgentResponsibilitiesDisplayProps
> = ({
  selectedAgent,
  selectedRoles,
  rolesByAgent,
  responsibilitiesByRole,
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
      }
    }, 15);
    return () => clearInterval(interval);
  }, [responsibilitesDisplayText]);

  return (
    <Box sx={{ padding: "4px", marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom sx={{ whiteSpace: "pre-line" }}>
        {displayedText}
      </Typography>
    </Box>
  );
};

export default AgentResponsibilitiesDisplay;
