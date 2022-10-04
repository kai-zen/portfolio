import { Box, Grid, Paper, Typography } from "@mui/material";
import { skillsSections } from "../assets/constants";
import { PageTitle } from "../components/common";
import { MainSkills } from "../components/skills";

const Skills = () => {
  return (
    <Paper sx={styles.container} elevation={0}>
      <PageTitle title="My Skills" />
      <Grid container spacing={3}>
        <MainSkills />
        {skillsSections.map((section) => (
          <Grid item xs={12} sm={6} md={4} sx={styles.skillsSection}>
            <Typography variant="h4">{section.title}</Typography>
            <Box>
              {section.data.map((item) => (
                <Typography>● {item}</Typography>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

const styles = {
  container: {
    p: "30px",
    pb: "100px",
    minHeight: "100vh",
  },
  skillsSection: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 2,
  },
};

export default Skills;
