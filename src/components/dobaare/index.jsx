import { BarChart, ChevronLeft, InstallMobile } from '@mui/icons-material';
import { Button, Divider, Fab, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Box } from '@mui/system';
import { useState } from 'react';
import Landing from './Landing';
import PWA from './PWA';
import Panel from './Panel';

const Dobaare = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(2);
  return (
    <Paper
      sx={{
        p: '30px',
        pb: '100px',
        minHeight: '100vh',
      }}
      square
    >
      <Grid container spacing={3} sx={{ mt: { xs: 1, sm: 3 } }}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              ml: { sm: '10%' },
              textAlign: { xs: 'center', sm: 'left' },
              fontFamily: 'Dancing Script',
            }}
            color="primary"
          >
            Me at Dobaare:
            <Divider sx={{ width: '100%' }} />
            <Divider sx={{ width: '100%' }} />
            <Divider sx={{ width: '100%' }} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              ml: { sm: '10%' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Dobaare project consists of 3 main parts:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              ml: { sm: '10%' },
              display: 'flex',
              gap: 2,
              width: '100%',
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <Fab
              color={`${active === 1 ? 'primary' : ''}`}
              variant="extended"
              onClick={() => setActive(1)}
            >
              <NavigationIcon sx={{ mr: 1 }} />
              Landing
            </Fab>
            <Fab
              color={`${active === 2 ? 'primary' : ''}`}
              variant="extended"
              onClick={() => setActive(2)}
            >
              <InstallMobile sx={{ mr: 1 }} />
              PWA
            </Fab>
            <Fab
              color={`${active === 3 ? 'primary' : ''}`}
              variant="extended"
              onClick={() => setActive(3)}
            >
              <BarChart sx={{ mr: 1 }} />
              Panel
            </Fab>
          </Box>
        </Grid>
        {active === 1 && (
          <Grid
            item
            xs={12}
            sx={{
              m: { xs: '20px', sm: '10px calc(15% + 80px)' },
            }}
          >
            <Landing />
          </Grid>
        )}
        {active === 2 && (
          <Grid
            item
            xs={12}
            sx={{
              m: { xs: '20px', sm: '10px calc(15% + 80px)' },
            }}
          >
            <PWA />
          </Grid>
        )}
        {active === 3 && (
          <Grid
            item
            xs={12}
            sx={{
              m: { xs: '20px', sm: '20px 10%' },
            }}
          >
            <Panel />
          </Grid>
        )}

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
            navigate('/Skills');
          }}
        >
          Skills
        </Button>
      </Grid>
    </Paper>
  );
};

export default Dobaare;
