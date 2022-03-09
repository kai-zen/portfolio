import { ChevronLeft } from '@mui/icons-material';
import { Button, Collapse, Typography } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import MyLayout from './layout';

const HomePage = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <>
      <MyLayout />
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
              fontFamily: 'Dancing Script',
              fontWeight: 'bold',
              textAlign: 'left',
              ml: '10%',
              fontSize: '4.5rem',
            }}
            variant="h2"
          >
            <span
              style={{
                color: cyan[400],
              }}
            >
              Hi,
              <br />
            </span>
            Welcome here
            <br />
            I'm Ali.
          </Typography>
          <Typography variant="subtitle1" color="primary" sx={{ ml: '10%' }}>
            <i>front-end developer</i>
          </Typography>
        </Collapse>
        <Button
          variant="outlined"
          size="large"
          sx={{
            position: 'fixed',
            left: '10%',
            bottom: '5%',
            zIndex: '3',
          }}
          startIcon={<ChevronLeft />}
          onClick={() => {
            navigate('/Projects');
          }}
        >
          Projects
        </Button>
      </Box>
    </>
  );
};

export default HomePage;
