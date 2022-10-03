import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { skillsSections } from "../assets/constants";
import MainSkills from "../components/skills/MainSkills";

const Skills = () => {
  return (
    <Paper
      sx={{
        p: "30px",
        pb: "100px",
        minHeight: "100vh",
      }}
      square
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
        My Skills
        <Divider sx={{ width: "100%" }} />
        <Divider sx={{ width: "100%" }} />
        <Divider sx={{ width: "100%" }} />
      </Typography>
      <Grid container spacing={3}>
        <MainSkills />
        {skillsSections.map((section) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
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

export default Skills;
