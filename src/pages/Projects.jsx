import { Box, Paper } from "@mui/material";
import { useEffect } from "react";
import { projectsData } from "../assets/constants";
import { PageTitle } from "../components/common";
import { Project } from "../components/projects";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Paper sx={styles.container} elevation={0}>
      <PageTitle title="My Projects" />
      <Box sx={styles.projectsContainer}>
        {projectsData.map((project) => (
          <Project data={project} />
        ))}
      </Box>
    </Paper>
  );
};

const styles = {
  container: {
    p: "30px",
    pb: "100px",
    minHeight: "100vh",
  },
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
    px: "12%",
  },
};

export default Projects;
