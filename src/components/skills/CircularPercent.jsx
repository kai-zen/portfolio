import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';

const CircularPercent = ({ text, number }) => {
  return (
    <>
      <Box sx={{ position: 'relative', display: 'inline-flex', mt: 3 }}>
        <CircularProgress variant="determinate" value={number} size={80} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" component="div" color="text.secondary">
            {number}%
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ p: 2, pt: 3 }} variant="h5">
        {text}
      </Typography>
    </>
  );
};

export default CircularPercent;
