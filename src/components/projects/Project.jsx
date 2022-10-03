import { Box, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Project = ({ data }) => {
  const { title, subprojects, id } = data;
  return (
    <Box>
      <Typography variant="h4">
        {id}. {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          pl: 3,
          mt: 2,
        }}
      >
        {subprojects.map((item) => (
          <Box>
            <Typography sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <ArrowForwardIcon color="primary" />
              {item.title}:{" "}
              <Link
                onClick={() => {
                  window.open(item.address, "_blank");
                }}
                sx={{ cursor: "pointer" }}
              >
                {item.address}
              </Link>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Project;
