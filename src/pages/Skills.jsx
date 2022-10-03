import { Divider, Grid, Paper, Typography } from "@mui/material";
import SkillsGrid from "../components/skills/SkillsGrid";

const Skills = () => {
  return (
    <Paper
      sx={{
        p: "30px",
        pb: "100px",
        minHeight: "100vh",
      }}
      square
    >
      <Grid container spacing={3} sx={{ mt: { xs: 1, sm: 3 } }}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              ml: { sm: "10%" },
              textAlign: { xs: "center", sm: "left" },
              fontFamily: "Dancing Script",
            }}
            color="primary"
          >
            My Skills
            <Divider sx={{ width: "100%" }} />
            <Divider sx={{ width: "100%" }} />
            <Divider sx={{ width: "100%" }} />
          </Typography>
        </Grid>
        <SkillsGrid />
      </Grid>
    </Paper>
  );
};

export default Skills;
