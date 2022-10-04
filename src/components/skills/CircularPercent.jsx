import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CircularPercent = ({ text, number }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <CircularProgress variant="determinate" value={number} size={80} />
        <Box sx={styles.percentBox}>
          <Typography variant="h5" component="div" color="text.secondary">
            {number}%
          </Typography>
        </Box>
      </Box>
      <Typography sx={styles.skillTitle} variant="h5" noWrap>
        {text}
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerContainer: { position: "relative" },
  percentBox: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  skillTitle: { p: 2, pt: 3 },
};

export default CircularPercent;
