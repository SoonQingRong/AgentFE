import React, { useState } from "react";
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
  const [checkedRoles, setCheckedRoles] = useState<string[]>([]);

  return (
    <Box sx={{ padding: "4px", marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        {prompt}
      </Typography>

      {roles.map((role) => (
        <AgentRoleCheckbox
          role={role}
          checkedRoles={checkedRoles}
          setCheckedRoles={setCheckedRoles}
        />
      ))}

      <Box sx={{ marginTop: "10px" }}>
        <AgentRoleConfirmationButton
          onProceed={onProceed}
          checkedRoles={checkedRoles}
        />
      </Box>
    </Box>
  );
};

export default AgentRoleSelector;
