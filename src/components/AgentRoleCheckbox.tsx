import React, { useEffect } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import theme from "../theme";

interface agentRoleCheckboxProps {
  onComponentUpdate: () => void;
  role: string;
  checkedRoles: string[];
  setCheckedRoles: React.Dispatch<React.SetStateAction<string[]>>;
  disabled: boolean;
}

const AgentRoleCheckbox: React.FC<agentRoleCheckboxProps> = ({
  onComponentUpdate,
  role,
  checkedRoles,
  setCheckedRoles,
  disabled,
}) => {
  const toggleRole = (role: string) => {
    setCheckedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  useEffect(() => {
    if (onComponentUpdate) {
      onComponentUpdate();
    }
  }, [onComponentUpdate]);

  return (
    <FormControlLabel
      key={role}
      control={
        <Checkbox
          checked={checkedRoles.includes(role)}
          onChange={() => toggleRole(role)}
          disabled={disabled}
          sx={{
            color: theme.palette.primary.light,
            "&.Mui-checked": {
              color: theme.palette.secondary.main,
            },
            "&:hover": {
              color: theme.palette.secondary.main,
            },
            "&.Mui-disabled": {
              color: theme.palette.primary.light,
            },
          }}
        />
      }
      label={role}
      disabled={disabled}
      sx={{
        "&.Mui-disabled .MuiTypography-root": {
          color: theme.palette.text.primary,
        },
      }}
    />
  );
};

export default AgentRoleCheckbox;
