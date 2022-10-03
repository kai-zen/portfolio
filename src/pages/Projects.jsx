import { Box, Paper } from "@mui/material";
import { projectsData } from "../assets/constants";
import Project from "../components/projects/Project";

const Projects = () => {
  return (
    <Paper
      sx={{
        p: "30px",
        pb: "100px",
        minHeight: "100vh",
      }}
      elevation={4}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 7,
          px: "12%",
          my: "80px",
        }}
      >
        {projectsData.map((project) => (
          <Project data={project} />
        ))}
      </Box>
    </Paper>
  );
};

export default Projects;
