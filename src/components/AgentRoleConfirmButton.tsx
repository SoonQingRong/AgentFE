import { Button } from "@mui/material";
import theme from "../theme";

interface agentRoleConfirmationButtonProps {
  onProceed: (selectedRoles: string[]) => void;
  checkedRoles: string[];
}

const AgentRoleConfirmationButton: React.FC<
  agentRoleConfirmationButtonProps
> = ({ onProceed, checkedRoles }) => {
  return (
    <Button
      variant="contained"
      onClick={() => onProceed(checkedRoles)}
      disabled={checkedRoles.length === 0}
      sx={{
        textTransform: "none",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.text.secondary,
        "&.Mui-disabled": {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.text.primary,
        },
      }}
    >
      CONFIRM
    </Button>
  );
};

export default AgentRoleConfirmationButton;
