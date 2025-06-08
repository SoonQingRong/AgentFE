import { Box, Typography } from "@mui/material";
import theme from "../../theme";

const AlternatePageView = () => {
  return (
    <Box
      sx={{
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Typography sx={{ fontSize: 50, color: theme.palette.text.primary }}>
        TS Frontend
      </Typography>
    </Box>
  );
};

export default AlternatePageView;
