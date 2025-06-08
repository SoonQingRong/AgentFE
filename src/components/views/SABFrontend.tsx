import { Box, Typography } from "@mui/material";
import theme from "../../theme";

const SABFrontend = () => {
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
        SAB Frontend
      </Typography>
    </Box>
  );
};

export default SABFrontend;
