import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AgentRoleCheckbox from "./AgentRoleCheckbox";
import AgentRoleConfirmationButton from "./AgentRoleConfirmButton";

interface AgentRoleSelectorProps {
  timeBetweenCharactersDisplayInMS: number;
  onComponentUpdate: () => void;
  prompt: string;
  roles: string[];
  onConfirm: (selectedRoles: string[]) => void;
}

const AgentRoleSelector: React.FC<AgentRoleSelectorProps> = ({
  timeBetweenCharactersDisplayInMS,
  onComponentUpdate,
  prompt,
  roles,
  onConfirm,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [checkedRoles, setCheckedRoles] = useState<string[]>([]);

  const handleConfirm = (roles: string[]) => {
    setButtonClicked(true);
    onConfirm(roles);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(prompt.slice(0, index + 1));
      index++;
      if (onComponentUpdate) {
        onComponentUpdate();
      }
      if (index >= prompt.length) {
        clearInterval(interval);
        setTimeout(() => setShowCheckboxes(true), 300); // delay checkboxes
      }
    }, timeBetweenCharactersDisplayInMS);
    return () => clearInterval(interval);
  }, [prompt, timeBetweenCharactersDisplayInMS, onComponentUpdate]);

  return (
    <Box sx={{ padding: "4px", marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        {displayedText}
      </Typography>

      {showCheckboxes && (
        <Box>
          {roles.map((role) => (
            <AgentRoleCheckbox
              onComponentUpdate={onComponentUpdate}
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
            onComponentUpdate={onComponentUpdate}
            onConfirm={handleConfirm}
            checkedRoles={checkedRoles}
            disabled={checkedRoles.length === 0 || buttonClicked}
          />
        </Box>
      )}
    </Box>
  );
};

export default AgentRoleSelector;
