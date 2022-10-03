import { Box, Divider, Paper, Typography } from "@mui/material";
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
      elevation={0}
    >
      <Typography
        variant="h3"
        sx={{
          px: { sm: "10%" },
          textAlign: { xs: "center", sm: "left" },
          fontFamily: "Dancing Script",
          mt: "40px",
          mb: "20px",
        }}
        color="primary"
      >
        My Projects
        <Divider sx={{ width: "100%" }} />
        <Divider sx={{ width: "100%" }} />
        <Divider sx={{ width: "100%" }} />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 7,
          px: "12%",
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
