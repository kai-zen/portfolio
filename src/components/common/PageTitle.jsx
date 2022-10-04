import { Divider, Typography } from "@mui/material";

const PageTitle = ({ title }) => {
  return (
    <Typography variant="h3" sx={styles.pageTitle} color="primary">
      {title}
      <Divider sx={{ width: "100%" }} />
      <Divider sx={{ width: "100%" }} />
      <Divider sx={{ width: "100%" }} />
    </Typography>
  );
};

const styles = {
  pageTitle: {
    px: { sm: "10%" },
    textAlign: { xs: "center", sm: "left" },
    fontFamily: "Dancing Script",
    mt: "40px",
    mb: "20px",
  },
};

export default PageTitle;
