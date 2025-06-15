import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AgentRoleCheckbox from "./AgentRoleCheckbox";
import AgentRoleConfirmationButton from "./AgentRoleConfirmButton";

interface AgentRoleSelectorProps {
  prompt: string;
  roles: string[];
  onProceed: (selectedRoles: string[]) => void;
}

const AgentRoleSelector: React.FC<AgentRoleSelectorProps> = ({
  prompt,
  roles,
  onProceed,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCheckboxes, setShowCheckboxes] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(prompt.slice(0, index + 1));
      index++;
      if (index >= prompt.length) {
        clearInterval(interval);
        setTimeout(() => setShowCheckboxes(true), 300); // delay dropdown
      }
    }, 15);
    return () => clearInterval(interval);
  }, [prompt]);

  const [checkedRoles, setCheckedRoles] = useState<string[]>([]);

  return (
    <Box sx={{ padding: "4px", marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        {displayedText}
      </Typography>

      {showCheckboxes && (
        <Box>
          {roles.map((role) => (
            <AgentRoleCheckbox
              role={role}
              checkedRoles={checkedRoles}
              setCheckedRoles={setCheckedRoles}
            />
          ))}
        </Box>
      )}

      {showCheckboxes && (
        <Box sx={{ marginTop: "10px" }}>
          <AgentRoleConfirmationButton
            onProceed={onProceed}
            checkedRoles={checkedRoles}
          />
        </Box>
      )}
    </Box>
  );
};

export default AgentRoleSelector;
