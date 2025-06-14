import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import theme from "../theme";

interface agentRoleCheckboxProps {
  role: string;
  checkedRoles: string[];
  setCheckedRoles: React.Dispatch<React.SetStateAction<string[]>>;
}

const AgentRoleCheckbox: React.FC<agentRoleCheckboxProps> = ({
  role,
  checkedRoles,
  setCheckedRoles,
}) => {
  const toggleRole = (role: string) => {
    setCheckedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  return (
    <FormControlLabel
      key={role}
      control={
        <Checkbox
          checked={checkedRoles.includes(role)}
          onChange={() => toggleRole(role)}
          sx={{
            color: theme.palette.primary.light,
            "&.Mui-checked": {
              color: theme.palette.secondary.main,
            },
            "&:hover": {
              color: theme.palette.secondary.main,
            },
          }}
        />
      }
      label={role}
    />
  );
};

export default AgentRoleCheckbox;
