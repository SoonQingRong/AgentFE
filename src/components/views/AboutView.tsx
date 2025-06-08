import { Box, Typography } from "@mui/material";
import theme from "../../theme";

const AboutView = () => {
  return (
    <Box
      sx={{
        padding: "30px",
        maxWidth: 600,
        margin: "auto",
        backgroundColor: theme.palette.primary.dark,
        color: "text.primary",
      }}
    >
      <Typography>Developed by: RACE Team</Typography>

      <Typography>Version: v1.0.0</Typography>
    </Box>
  );
};

export default AboutView;
