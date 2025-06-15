import { Button } from "@mui/material";
import theme from "../theme";

interface agentRoleConfirmationButtonProps {
  onConfirm: (selectedRoles: string[]) => void;
  checkedRoles: string[];
  disabled: boolean;
}

const AgentRoleConfirmationButton: React.FC<
  agentRoleConfirmationButtonProps
> = ({ onConfirm, checkedRoles, disabled }) => {
  const handleClick = () => {
    onConfirm(checkedRoles);
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      disabled={disabled}
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
