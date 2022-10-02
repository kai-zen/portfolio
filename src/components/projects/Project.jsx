import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Link,
  Skeleton,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const Project = ({ data, index }) => {
  const {
    title,
    title2,
    date,
    image,
    sourceCode,
    visitLink,
    technologies,
    aboutJSX,
    extraInfoJSX = null,
  } = data;
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader title={`${index}. ${title}`} subheader={date} />
      {loading ? (
        <Skeleton
          animation="wave"
          variant="rectangle"
          width="100%"
          height="550px"
        />
      ) : (
        <>
          <CardMedia component="img" image={image} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {title2}
              <br />
              <br />
              {extraInfoJSX}
              <Link
                onClick={() => {
                  window.open(sourceCode, "_blank");
                }}
                sx={{ cursor: "pointer" }}
              >
                Source code
              </Link>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button
              variant="contained"
              onClick={() => {
                window.open(visitLink, "_blank");
              }}
            >
              Visit
            </Button>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>About this project:</Typography>
              {aboutJSX}
              <Box>
                {technologies.map((item) => (
                  <Chip
                    label={item}
                    key={item}
                    sx={{ mr: 1, mb: 1 }}
                    size="small"
                  />
                ))}
              </Box>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default Project;
