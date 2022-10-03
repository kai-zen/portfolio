import { Grid, Typography } from "@mui/material";
import { mainSkills } from "../../assets/constants";
import CircularPercent from "./CircularPercent";

const MainSkills = () => {
  return (
    <>
      <Typography variant="h4" sx={{ px: "10%", mt: 3, mb: 1.5, ml: 3 }}>
        Main skills:
      </Typography>
      <Grid container sx={{ px: "10%", mb: 4 }}>
        {mainSkills.map((item) => (
          <Grid
            xs={6}
            sm={4}
            md={3}
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularPercent text={item.text} number={item.number} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MainSkills;
