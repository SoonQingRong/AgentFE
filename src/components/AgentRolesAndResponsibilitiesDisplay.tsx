import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

interface AgentRolesAndResponsibilitiesDisplayProps {
  selectedAgent: string;
  roles: string[];
  selectedRoles: string[];
  rolesByAgent: Record<string, string[]>;
  responsibilitiesByRole: Record<string, string[]>;
}

const AgentRolesAndResponsibilitiesDisplay: React.FC<
  AgentRolesAndResponsibilitiesDisplayProps
> = ({
  selectedAgent,
  roles,
  selectedRoles,
  rolesByAgent,
  responsibilitiesByRole,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  const rolesDisplayText = `Role(s) selected: ${roles
    .filter((role) => selectedRoles.includes(role))
    .join(", ")}`;

  const fullResponsibilitiesText = rolesByAgent[selectedAgent]
    .filter((role) => selectedRoles.includes(role))
    .flatMap((role) =>
      responsibilitiesByRole[role].map(
        (responsibility) => `${responsibility} (${role})`
      )
    )
    .map((line, idx) => `${idx + 1}) ${line}`)
    .join("\n");

  const rolesAndResponsibilitesDisplayText = `${rolesDisplayText}\nResponsibilities:\n${fullResponsibilitiesText}`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(rolesAndResponsibilitesDisplayText.slice(0, index + 1));
      index++;
      if (index >= rolesAndResponsibilitesDisplayText.length) {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [rolesAndResponsibilitesDisplayText]);

  return (
    <Box sx={{ padding: "4px" }}>
      <Typography variant="h6" gutterBottom sx={{ whiteSpace: "pre-line" }}>
        {displayedText}
      </Typography>
    </Box>
  );
};

export default AgentRolesAndResponsibilitiesDisplay;
