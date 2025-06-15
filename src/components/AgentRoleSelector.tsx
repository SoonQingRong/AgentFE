import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AgentRoleCheckbox from "./AgentRoleCheckbox";
import AgentRoleConfirmationButton from "./AgentRoleConfirmButton";

interface AgentRoleSelectorProps {
  timeBetweenCharactersDisplayInMS: number;
  prompt: string;
  roles: string[];
  onConfirm: (selectedRoles: string[]) => void;
}

const AgentRoleSelector: React.FC<AgentRoleSelectorProps> = ({
  timeBetweenCharactersDisplayInMS,
  prompt,
  roles,
  onConfirm,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [checkedRoles, setCheckedRoles] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(prompt.slice(0, index + 1));
      index++;
      if (index >= prompt.length) {
        clearInterval(interval);
        setTimeout(() => setShowCheckboxes(true), 300); // delay checkboxes
      }
    }, timeBetweenCharactersDisplayInMS);
    return () => clearInterval(interval);
  }, [prompt, timeBetweenCharactersDisplayInMS]);

  return (
    <Box sx={{ padding: "4px", marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        {displayedText}
      </Typography>

      {showCheckboxes && (
        <Box>
          {roles.map((role) => (
            <AgentRoleCheckbox
              key={role}
              role={role}
              checkedRoles={checkedRoles}
              setCheckedRoles={setCheckedRoles}
              disabled={buttonClicked}
            />
          ))}
        </Box>
      )}

      {showCheckboxes && (
        <Box sx={{ marginTop: "10px" }}>
          <AgentRoleConfirmationButton
            onConfirm={(roles) => {
              setButtonClicked(true);
              onConfirm(roles);
            }}
            checkedRoles={checkedRoles}
            disabled={checkedRoles.length === 0 || buttonClicked}
          />
        </Box>
      )}
    </Box>
  );
};

export default AgentRoleSelector;
