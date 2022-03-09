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

const ToDo = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader title="4. Boring todo list" subheader="December 15, 2021" />
      <CardMedia component="img" image="/images/todo.png" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          My first Redux project:
          <br />
          <br />
          My project has more options than what the youtube channel shows but
          here is the actual owner:
          <br />
          <Link>Source code</Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained">Visit</Button>
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
            It was just a pratice to be more familiar with redux which I used to
            learn it from 3 different sources.
            <br />
            Styling and UI are all only CSS and HTML, My friend asked me to
            apply some changes so it's doesn't look exactly like what I made it
            based on like having an editing page or some other tiny things.
            There are no tools but HTML, CSS, React and Redux.
          </Typography>
          <Box>
            <Chip label="React.js" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="CSS" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="HTML" sx={{ mr: 1, mb: 1 }} size="small" />
            <Chip label="Redux" sx={{ mr: 1, mb: 1 }} size="small" />
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ToDo;
