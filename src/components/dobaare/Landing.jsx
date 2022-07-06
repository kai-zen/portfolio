import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Skeleton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  return (
    <Card width="100%">
      <CardHeader title="1. Dobaare Landing page" subheader="May 30, 2022" />
      {loading ? (
        <Skeleton
          animation="wave"
          variant="rectangle"
          width="100%"
          height="550px"
        />
      ) : (
        <Box
          sx={{
            maxHeight: '550px',
            minWidth: '100%',
            overflowY: 'scroll',
            boxSizing: 'content-box',
            pr: '17px',
          }}
        >
          <CardMedia component="img" image="/images/landing.png" />
        </Box>
      )}
      <CardContent>
        <Typography paragraph>Landing in detail:</Typography>
        <Typography paragraph>
          This project is made based on the UI given to me, It has no framework,
          not even low level frameworks such as tailwind, the only tool is used
          in the project is sass and webpack to manage SCSS tansformation to
          CSS.
        </Typography>
        <Box>
          <Chip label="HTML" sx={{ mr: 1, mb: 1 }} size="small" />
          <Chip label="CSS" sx={{ mr: 1, mb: 1 }} size="small" />
          <Chip label="Javascript" sx={{ mr: 1, mb: 1 }} size="small" />
          <Chip label="Sass" sx={{ mr: 1, mb: 1 }} size="small" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Landing;
