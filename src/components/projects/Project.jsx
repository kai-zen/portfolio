import { Box, Chip, Grid, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Project = ({ data }) => {
  const { title, subprojects, id } = data;
  return (
    <Box>
      <Typography variant="h4">
        {id}. {title}
      </Typography>
      <Box sx={styles.subprojects.container}>
        {subprojects.map((item) => (
          <Box sx={{ mb: 2 }}>
            <Typography sx={styles.subprojects.title} variant="h6">
              <ArrowForwardIcon color="primary" />
              {item.title}:{" "}
              <Link
                onClick={() => {
                  window.open(item.address, "_blank");
                }}
                sx={styles.subprojects.link}
              >
                {item.address}
              </Link>
            </Typography>
            <Grid container sx={styles.subprojects.stackContainer}>
              {item.stack.map((technology) => (
                <Chip label={technology} key={technology} size="small" />
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const styles = {
  subprojects: {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 0.5,
      pl: 3,
      mt: 2,
    },
    title: { display: "flex", alignItems: "center", gap: 2 },
    link: { cursor: "pointer" },
    stackContainer: { display: "flex", gap: 1, mt: 1 },
  },
};

export default Project;
