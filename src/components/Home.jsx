import { Collapse, Typography } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url("./images/bkg.png")',
        backgroundPosition: '60% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
      }}
      id="header"
    >
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={0}
        sx={{ width: '100%' }}
      >
        <Typography
          sx={{
            color: '#fff',
            fontFamily: 'Lobster',
            textAlign: 'center',
            display: { xs: 'none', sm: 'block' },
          }}
          variant="h1"
        >
          <span
            style={{
              color: cyan[400],
            }}
          >
            We
          </span>
          lcome to
          <br />
          my site.
        </Typography>
        <Typography
          sx={{
            color: '#fff',
            fontFamily: 'Lobster',
            textAlign: 'center',
            display: { xs: 'block', sm: 'none' },
          }}
          variant="h2"
        >
          <span
            style={{
              color: cyan[400],
            }}
          >
            We
          </span>
          lcome to
          <br />
          my site.
        </Typography>
      </Collapse>
    </Box>
  );
};

export default HomePage;
