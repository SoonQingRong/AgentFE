import React, { useEffect, useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import AgentSelector from "../AgentSelector";
import AgentRoleSelector from "../AgentRoleSelector";
import AgentRolesDisplay from "../AgentRolesDisplay";
import AgentResponsibilitiesDisplay from "../AgentResponsibilitiesDisplay";
import AgentToolsDisplay from "../AgentToolsDisplay";

interface C3AssistantProps {
  sidebarDelayInSeconds: number;
  onComponentUpdate: () => void;
}

const timeBetweenCharactersDisplayInMS: number = 10;

// const agentSelectionPrompt = "Hi, please select your agent";
const agentSelectionPrompt =
  "Lorem ipsum dolor sit amet. Sit iusto asperiores a odit tempora ea nesciunt quas ut officia voluptates qui distinctio internos qui reprehenderit atque qui alias minus. Qui quos earum in galisum inventore eum tenetur saepe et obcaecati vitae qui soluta cupiditate et accusantium iusto ea necessitatibus quae." +
  "Et quia consequuntur aut labore enim et molestiae dolor et architecto nihil et labore vero ea sint corporis. Est similique natus eos veritatis voluptates ut eaque nisi et voluptatum magni a possimus adipisci sed voluptatem perferendis et natus galisum." +
  "Sed expedita quia et delectus quasi nam tenetur facilis qui recusandae fugiat eos blanditiis minima. Qui ducimus velit aut eaque ipsa et tempore enim sed aspernatur maiores est voluptas voluptatum in voluptatem explicabo. Et facere dignissimos est quis alias aut nihil illum ut aspernatur neque et cumque corporis. Rem odio voluptas eos facilis dolorum non quia consectetur.";
const agentOptions = ["APG", "MPS", "SAB"];

const roleSelectionPrompt = "Please select your role(s)";
const rolesByAgent: Record<string, string[]> = {
  APG: ["APG (L&R)", "APG (PO)", "APG (Test)"],
  MPS: ["MPS1", "MPS2", "MPS3"],
  SAB: ["SAB1", "SAB2", "SAB3"],
};

const responsibilitiesByRole: Record<string, string[]> = {
  "APG (L&R)": ["Do APG stuff 1"],
  "APG (PO)": ["Do APG stuff 2", "Do APG stuff 3"],
  "APG (Test)": ["Do APG stuff 4"],
  MPS1: ["Do MPS stuff 1"],
  MPS2: ["Do MPS stuff 2"],
  MPS3: ["Do MPS stuff 3"],
  SAB1: ["Do SAB stuff 1"],
  SAB2: ["Do SAB stuff 2"],
  SAB3: ["Do SAB stuff 3"],
};

const toolsByResponsibility: Record<string, string[]> = {
  "Do APG stuff 1": ["APG API 1"],
  "Do APG stuff 2": ["APG API 1", "APG API 2"],
  "Do APG stuff 3": ["APG API 2", "APG API 3"],
  "Do APG stuff 4": ["APG API 3"],
  "Do MPS stuff 1": ["MPS API 1"],
  "Do MPS stuff 2": ["MPS API 2"],
  "Do MPS stuff 3": ["MPS API 1"],
  "Do SAB stuff 1": ["SAB API 1"],
  "Do SAB stuff 2": ["SAB API 2"],
  "Do SAB stuff 3": ["SAB API 2"],
};

const C3Assistant: React.FC<C3AssistantProps> = ({
  sidebarDelayInSeconds,
  onComponentUpdate,
}) => {
  const [selectedAgent, setSelectedAgent] = useState<string>("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [rolesDisplayDone, setRolesDisplayDone] = useState(false);
  const [responsibilitiesDisplayDone, setResponsibilitiesDisplayDone] =
    useState(false);

  const handleAgentChange = (agent: string) => {
    setSelectedAgent(agent);
    setSelectedRoles([]);
  };

  const handleConfirm = (roles: string[]) => {
    setSelectedRoles(roles);
  };

  const handleRolesDisplayDone = useCallback(() => {
    setRolesDisplayDone(true);
  }, []);

  const handleResponsibilitiesDisplayDone = useCallback(() => {
    setResponsibilitiesDisplayDone(true);
  }, []);

  useEffect(() => {
    if (selectedRoles.length > 0) {
      setRolesDisplayDone(false);
      setResponsibilitiesDisplayDone(false);
    }
  }, [selectedRoles]);

  return (
    <Box sx={{ padding: "10px" }}>
      <Typography variant="h5" gutterBottom>
        Welcome to C3 Assistant
      </Typography>
      <AgentSelector
        timeBetweenCharactersDisplayInMS={timeBetweenCharactersDisplayInMS}
        onComponentUpdate={onComponentUpdate}
        prompt={agentSelectionPrompt}
        sidebarDelayInSeconds={sidebarDelayInSeconds}
        agentOptions={agentOptions}
        onAgentChange={handleAgentChange}
      />
      {selectedAgent && (
        <AgentRoleSelector
          key={selectedAgent}
          timeBetweenCharactersDisplayInMS={timeBetweenCharactersDisplayInMS}
          onComponentUpdate={onComponentUpdate}
          prompt={roleSelectionPrompt}
          roles={rolesByAgent[selectedAgent]}
          onConfirm={handleConfirm}
        />
      )}

      {selectedRoles.length > 0 && (
        <AgentRolesDisplay
          timeBetweenCharactersDisplayInMS={timeBetweenCharactersDisplayInMS}
          onComponentUpdate={onComponentUpdate}
          roles={rolesByAgent[selectedAgent]}
          selectedRoles={selectedRoles}
          onRolesDisplayDone={handleRolesDisplayDone}
        />
      )}

      {rolesDisplayDone && selectedRoles.length > 0 && (
        <AgentResponsibilitiesDisplay
          timeBetweenCharactersDisplayInMS={timeBetweenCharactersDisplayInMS}
          onComponentUpdate={onComponentUpdate}
          selectedAgent={selectedAgent}
          selectedRoles={selectedRoles}
          rolesByAgent={rolesByAgent}
          responsibilitiesByRole={responsibilitiesByRole}
          onResponsibilitiesDisplayDone={handleResponsibilitiesDisplayDone}
        />
      )}

      {responsibilitiesDisplayDone && selectedRoles.length > 0 && (
        <AgentToolsDisplay
          timeBetweenCharactersDisplayInMS={timeBetweenCharactersDisplayInMS}
          onComponentUpdate={onComponentUpdate}
          selectedRoles={selectedRoles}
          responsibilitiesByRole={responsibilitiesByRole}
          toolsByResponsibility={toolsByResponsibility}
        />
      )}
    </Box>
  );
};

export default C3Assistant;
