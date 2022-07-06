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
import { Button, Chip, Link, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

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

const SassResturant = () => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader title="6. Resturant first page" subheader="April 28, 2020" />
      {loading ? (
        <Skeleton
          animation="wave"
          variant="rectangle"
          width="100%"
          height="550px"
        />
      ) : (
        <>
          <CardMedia component="img" image="/images/sass.png" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              My training project with Sass/SCSS
              <br />
              <br />
              <Link
                onClick={() => {
                  window.open(
                    'https://github.com/kai-zen/scss-first-page-design',
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
                window.open('https://sass-resturant.netlify.app/', '_blank');
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
              <Typography paragraph>
                This project was deploying in 2020 during the course I was
                watching at toplearn.com
                <br />
                Everything is just made by HTML and Sass.
              </Typography>
              <Box>
                <Chip label="CSS" sx={{ mr: 1, mb: 1 }} size="small" />
                <Chip label="HTML" sx={{ mr: 1, mb: 1 }} size="small" />
                <Chip label="Sass" sx={{ mr: 1, mb: 1 }} size="small" />
              </Box>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
};

export default SassResturant;
