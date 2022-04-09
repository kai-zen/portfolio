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

const CarShop = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader title="5. Car shop first page" subheader="October 17, 2020" />
      <CardMedia component="img" image="/images/car.png" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          My training project with Bootstrap
          <br />
          <br />
          <Link
            onClick={() => {
              window.open(
                'https://github.com/kai-zen/bootstrap-car-shop',
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
            window.open('https://bootstrap-car-shop.netlify.app/', '_blank');
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
            This project was deploying in 2020 during the course I was watching
            at toplearn.com
            <br />
            Everything is just made by Bootstrap4 with the minimum amount of css
            and javascript.
          </Typography>
          <Box>
            <Chip label="CSS" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="HTML" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="jQuery" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="Javascript" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="Bootstrap" sx={{ mr: 1, mb: 1 }} size="small" />
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CarShop;
