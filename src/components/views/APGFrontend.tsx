import { Box, Typography } from "@mui/material";
import theme from "../../theme";

const APGFrontend = () => {
  return (
    <Box
      sx={{
        height: "600px",
        width: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Typography sx={{ fontSize: 50, color: theme.palette.text.primary }}>
        TS-APG Frontend
      </Typography>
    </Box>
  );
};

export default APGFrontend;
