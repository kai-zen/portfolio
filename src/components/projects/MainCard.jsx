import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Chip, Link } from '@mui/material';
import { Box } from '@mui/system';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MainCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader title="1. Food palace 2" subheader="March 6, 2022" />
      <CardMedia component="img" image="/images/food-palace-2.png" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          I made this CMS in 2 different versions:
          <br />
          <br />
          1.React + Redux
          <br />
          <Link
            onClick={() => {
              window.open('https://github.com/kai-zen/food-palace-2', '_blank');
            }}
            sx={{ cursor: 'pointer' }}
          >
            Source code
          </Link>
          <br />
          <br />
          2.Next.js + Mongo db
          <br />
          <Link
            onClick={() => {
              window.open(
                'https://github.com/kai-zen/next-food-palace-2',
                '_blank'
              );
            }}
            sx={{ cursor: 'pointer' }}
          >
            Source code
          </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          onClick={() => {
            window.open('https://food-palace-2.netlify.app', '_blank');
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
          <Typography paragraph>Next.js version:</Typography>
          <Typography paragraph>
            I used Material UI to implement components and cookies to save data,
            Redux to manage states in client side and SSR + static generation to
            fetch data from my own APIs (by axios) which are implemented using
            Next api routes. Saved data in mongo db and did the CRUD on it using
            mongoose.
          </Typography>
          <Typography paragraph>React.js version:</Typography>
          <Typography paragraph>
            In React version, I used react-router v6 to manage routes and Formik
            to validate forms, Redux to manage data and
          </Typography>
          <Box>
            <Chip label="Next.js" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="Redux toolkit" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="MUI" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="Mongoose" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="JWT" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="bcryptjs" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="axios" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="Formik" sx={{ mr: 1, mb: 1 }} size="small" />
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
