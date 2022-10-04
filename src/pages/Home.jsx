import { Collapse, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setChecked(true);
  }, []);

  return (
    <Box sx={styles.container} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={0}
        sx={styles.collapse}
      >
        <Typography sx={styles.welcomeTitle} variant="h2">
          <span style={{ color: cyan[400] }}>
            Hi,
            <br />
          </span>
          Welcome here
          <br />
          I'm Ali.
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary"
          sx={styles.welcomeSubtitle}
        >
          front-end developer
        </Typography>
      </Collapse>
    </Box>
  );
};

const styles = {
  container: {
    position: "relative",
    backgroundImage: 'url("./images/bkg.jpg")',
    backgroundPosition: "60% 0%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  collapse: { width: "100%" },
  welcomeTitle: {
    color: "#fff",
    fontFamily: "Dancing Script",
    fontWeight: "bold",
    textAlign: "left",
    ml: "12%",
    fontSize: { md: "5rem", sm: "4.5rem", xs: "4.2rem" },
  },
  welcomeSubtitle: { ml: "12%", fontStyle: "italic" },
};

export default HomePage;
