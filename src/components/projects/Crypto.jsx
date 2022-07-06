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
import { Button, Chip, Link, Skeleton } from '@mui/material';
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

const Crypto = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        title="3. Crypto price tracker"
        subheader="December 1, 2021"
      />
      {loading ? (
        <Skeleton
          animation="wave"
          variant="rectangle"
          width="100%"
          height="550px"
        />
      ) : (
        <>
          <CardMedia component="img" image="/images/crypto.png" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              My first experience working with APIs
              <br />
              <br />
              <Link
                onClick={() => {
                  window.open(
                    'https://github.com/kai-zen/crypto-tracker',
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
                window.open(
                  'https://github.com/kai-zen/crypto-tracker',
                  '_blank'
                );
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
                I didn't have any experience with APIs so it was more like a
                practice than a project.
                <br />
                Styling and UI are all only CSS and HTML.
              </Typography>
              <Box>
                <Chip label="React.js" sx={{ mr: 1, mb: 1 }} size="small" />
                <Chip label="CSS" sx={{ mr: 1, mb: 1 }} size="small" />
                <Chip label="HTML" sx={{ mr: 1, mb: 1 }} size="small" />
                <Chip label="axios" sx={{ mr: 1, mb: 1 }} size="small" />
              </Box>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
};

export default Crypto;
