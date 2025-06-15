import React, { useEffect, useState } from "react";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import theme from "../theme";

interface AgentSelectorDropdownProps {
  onComponentUpdate: () => void;
  agentOptions: string[];
  onAgentChange: (agent: string) => void;
}

const AgentSelectorDropDown: React.FC<AgentSelectorDropdownProps> = ({
  onComponentUpdate,
  agentOptions,
  onAgentChange,
}) => {
  const [agent, setAgent] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedAgent = event.target.value as string;
    setAgent(selectedAgent);
    onAgentChange(selectedAgent);
  };

  useEffect(() => {
    if (onComponentUpdate) {
      onComponentUpdate();
    }
  }, [onComponentUpdate]);

  return (
    <FormControl fullWidth>
      <InputLabel
        id="agent-select-label"
        sx={{
          color: theme.palette.text.primary,
          "&.Mui-focused": {
            color: theme.palette.text.secondary,
          }, //when dropdown activated
        }}
      >
        Agent
      </InputLabel>
      <Select
        labelId="agent-select-label"
        value={agent}
        label="Agent"
        onChange={handleChange}
        sx={{
          backgroundColor: theme.palette.primary.dark,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          }, // normal state
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
          }, //on hover
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
          }, //when dropdown activated
          "& .MuiSvgIcon-root": {
            color: theme.palette.primary.light,
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: theme.palette.primary.dark,
              "& .MuiMenuItem-root.Mui-selected": {
                border: `1px solid ${theme.palette.secondary.main}`,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.main,
                },
              },
            },
          },
        }}
      >
        {agentOptions.map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.primary,
              },
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default AgentSelectorDropDown;
