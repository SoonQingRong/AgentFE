import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AgentSelector from "../AgentSelector";
import AgentRoleSelector from "../AgentRoleSelector";
import AgentRolesAndResponsibilitiesDisplay from "../AgentRolesAndResponsibilitiesDisplay";

interface C3AssistantProps {
  sidebarDelayInSeconds: number;
}

const agentSelectionPrompt = "Hi, please select your agent";
const agentOptions = ["APG", "MPS", "SAB"];

const roleSelectionPrompt = "Please select your role(s)";
const rolesByAgent: Record<string, string[]> = {
  APG: ["APG (L&R)", "APG (PO)", "APG (Test)"],
  MPS: ["MPS1", "MPS2", "MPS3"],
  SAB: ["SAB1", "SAB2", "SAB3"],
};

const responsibilitiesByRole: Record<string, string[]> = {
  "APG (L&R)": ["Do APG stuff 1", "Do APG stuff 2"],
  "APG (PO)": ["Do APG stuff 3", "Do APG stuff 4", "Do APG stuff 5"],
  "APG (Test)": [
    "Do APG stuff 6",
    "Do APG stuff 7",
    "Do APG stuff 8",
    "Do APG stuff 9",
    "Do APG stuff 10",
  ],
  MPS1: ["Do MPS stuff 1"],
  MPS2: ["Do MPS stuff 2"],
  MPS3: ["Do MPS stuff 3"],
  SAB1: ["Do SAB stuff 1"],
  SAB2: ["Do SAB stuff 2"],
  SAB3: ["Do SAB stuff 3"],
};

const C3Assistant: React.FC<C3AssistantProps> = ({ sidebarDelayInSeconds }) => {
  const [selectedAgent, setSelectedAgent] = useState<string>("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const handleAgentChange = (agent: string) => {
    setSelectedAgent(agent);
    setSelectedRoles([]);
  };

  const handleConfirm = (roles: string[]) => {
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
        onAgentChange={handleAgentChange}
      />
      {selectedAgent && (
        <AgentRoleSelector
          key={selectedAgent}
          prompt={roleSelectionPrompt}
          roles={rolesByAgent[selectedAgent]}
          onConfirm={handleConfirm}
        />
      )}
      {/* 
      {selectedRoles.length > 0 && (
        <AgentRolesDisplay
          roles={rolesByAgent[selectedAgent]}
          selectedRoles={selectedRoles}
        />
      )}

      {selectedRoles.length > 0 && (
        <AgentResponsibilitiesDisplay
          selectedAgent={selectedAgent}
          selectedRoles={selectedRoles}
          rolesByAgent={rolesByAgent}
          responsibilitiesByRole={responsibilitiesByRole}
        />
      )} */}

      {selectedRoles.length > 0 && (
        <AgentRolesAndResponsibilitiesDisplay
          selectedAgent={selectedAgent}
          roles={rolesByAgent[selectedAgent]}
          selectedRoles={selectedRoles}
          rolesByAgent={rolesByAgent}
          responsibilitiesByRole={responsibilitiesByRole}
        />
      )}
    </Box>
  );
};

export default C3Assistant;
