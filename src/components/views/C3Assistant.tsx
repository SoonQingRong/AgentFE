import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AgentSelector from "../AgentSelector";
import AgentRoleSelector from "../AgentRoleSelector";

interface C3AssistantProps{
  sidebarDelayInSeconds: number;
}

const agentSelectionPrompt = "Hi, please select your agent";
const agentOptions = ["APG", "MPS", "SAB"];

const roleSelectionPrompt = "Please select your roles";
const rolesByAgent: Record<string, string[]> = {
  APG: ["APG1", "APG2", "APG3"],
  MPS: ["MPS1", "MPS2", "MPS3"],
  SAB: ["SAB1", "SAB2", "SAB3"],
};

const C3Assistant: React.FC<C3AssistantProps> = ({sidebarDelayInSeconds}) => {
  const [selectedAgent, setSelectedAgent] = useState<string>("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const handleProceed = (roles: string[]) => {
    setSelectedRoles(roles);
  };

  return (
    <Box sx={{ padding: "10px" }}>
      <Typography variant="h5" gutterBottom>
        Welcome to C3 Assistant
      </Typography>
      <AgentSelector
        prompt={agentSelectionPrompt}
        sidebarDelayInSeconds={sidebarDelayInSeconds}
        agentOptions={agentOptions}
        onAgentChange={setSelectedAgent}
      />
      {selectedAgent && (
        <AgentRoleSelector
          prompt={roleSelectionPrompt}
          roles={rolesByAgent[selectedAgent]}
          onProceed={handleProceed}
        />
      )}

      {selectedRoles.length > 0 && (
        <Box sx={{ marginTop: "20px" }}>
          <Typography>Roles: {selectedRoles.join(", ")}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default C3Assistant;
