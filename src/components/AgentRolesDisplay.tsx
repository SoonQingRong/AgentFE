import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

interface AgentRolesDisplayProps {
  timeBetweenCharactersDisplayInMS: number;
  onComponentUpdate: () => void;
  roles: string[];
  selectedRoles: string[];
  onRolesDisplayDone: () => void;
}

const AgentRolesDisplay: React.FC<AgentRolesDisplayProps> = ({
  timeBetweenCharactersDisplayInMS,
  onComponentUpdate,
  roles,
  selectedRoles,
  onRolesDisplayDone,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  const rolesDisplayText =
    `Role(s) selected:\n` +
    roles
      .filter((role) => selectedRoles.includes(role))
      .map((role, index) => `${index + 1}) ${role}`)
      .join("\n");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(rolesDisplayText.slice(0, index + 1));
      index++;
      if (onComponentUpdate) {
        onComponentUpdate();
      }
      if (index >= rolesDisplayText.length) {
        clearInterval(interval);
        onRolesDisplayDone();
      }
    }, timeBetweenCharactersDisplayInMS);
    return () => clearInterval(interval);
  }, [
    rolesDisplayText,
    onRolesDisplayDone,
    timeBetweenCharactersDisplayInMS,
    onComponentUpdate,
  ]);

  return (
    <Box sx={{ padding: "4px", marginTop: "20px" }}>
      <Typography variant="h6" sx={{ whiteSpace: "pre-line" }}>
        {displayedText}
      </Typography>
    </Box>
  );
};

export default AgentRolesDisplay;
