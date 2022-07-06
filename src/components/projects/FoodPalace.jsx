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

export default function FoodPalace() {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <Card>
      <CardHeader title="2. Food palace" subheader="September 30, 2021" />
      {loading ? (
        <Skeleton
          animation="wave"
          variant="rectangle"
          width="100%"
          height="550px"
        />
      ) : (
        <>
          <CardMedia component="img" image="/images/food-palace.png" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              It was my first react project and I made it all by myself, It was
              a bit bigger than what I was ready for it but after making it,
              everything became so much easier to work with. It was much more
              responsive when I made it but now it doesn't work the same (I
              guess something is missing about bootstrap grid)
              <br />
              <br />
              <Link
                onClick={() => {
                  window.open(
                    'https://github.com/kai-zen/food-palace',
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
                window.open('https://food-palace-1.netlify.app', '_blank');
              }}
            >
              Visit
            </Button>
            <ExpandMore
              expand={expanded}
              onClick={() => {
                setExpanded(!expanded);
              }}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>About Food palace:</Typography>
              <Typography paragraph>
                CSS framework which I used is Bootstrap, Did the routing with
                older versions of react-router which I was learned back then, I
                used simple-react-validator for validation and react-toastify to
                show notification. States are managed by Context and I think
                that's it all. (I removed lots of images to make it easier to
                load)
              </Typography>
              <Box>
                <Chip label="React.js" sx={{ mr: 1, mb: 1 }} size="small" />
                <Chip label="Context" sx={{ mr: 1, mb: 1 }} size="small" />
                <Chip label="Bootstrap" sx={{ mr: 1, mb: 1 }} size="small" />
                <Chip label="Vanilla JS" sx={{ mr: 1, mb: 1 }} size="small" />
                <Chip label="HTML" sx={{ mr: 1, mb: 1 }} size="small" />
                <Chip label="CSS" sx={{ mr: 1, mb: 1 }} size="small" />
                <Chip
                  label="simple-react-validator"
                  sx={{ mr: 1, mb: 1 }}
                  size="small"
                />
                <Chip
                  label="react-toastify"
                  sx={{ mr: 1, mb: 1 }}
                  size="small"
                />
              </Box>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
}
