import { Box, Typography } from "@mui/material";
import theme from "../../theme";

const MPSFrontend = () => {
  return (
    <Box
      sx={{
        height: "750px",
        width: "1500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Typography sx={{ fontSize: 50, color: theme.palette.text.primary }}>
        TS-MPS Frontend
      </Typography>
    </Box>
  );
};

export default MPSFrontend;
