import { Grid, Typography } from "@mui/material";
import { mainSkills } from "../../assets/constants";
import { CircularPercent } from ".";

const MainSkills = () => {
  return (
    <>
      <Typography variant="h4" sx={styles.title}>
        Main skills:
      </Typography>
      <Grid container sx={styles.mainSkills.container}>
        {mainSkills.map((item) => (
          <Grid xs={6} sm={4} md={3} sx={styles.mainSkills.item}>
            <CircularPercent text={item.text} number={item.number} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const styles = {
  title: { px: "10%", mt: 3, mb: 1.5, ml: 3 },
  mainSkills: {
    container: { px: "8%", mb: 4 },
    item: {
      mt: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
};

export default MainSkills;
