import { ChevronLeft } from '@mui/icons-material';
import { Button, Divider, Fab, Grid, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Crypto from './Crypto';
import FoodPalace from './FoodPalace';
import MainCard from './MainCard';
import ToDo from './TodoList';

const Projects = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState(1);

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
            My Projects
            <Divider sx={{ width: '80vw' }} />
            <Divider sx={{ width: '80vw' }} />
            <Divider sx={{ width: '80vw' }} />
          </Typography>
        </Grid>
        <Grid xs={12} item container spacing={2} sx={{ ml: { sm: '10%' } }}>
          <Grid
            item
            xs={12}
            sm={2}
            sx={{
              width: { xs: '80vw' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: { xs: 'row', sm: 'column' },
            }}
          >
            <Fab
              variant="extended"
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                width: { xs: '34px', sm: '48px' },
                height: { xs: '34px', sm: '48px' },
                borderRadius: '50%',
              }}
              color={project === 1 && 'primary'}
              onClick={() => {
                setProject(1);
              }}
            >
              1
            </Fab>
            <Fab
              variant="extended"
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                width: { xs: '34px', sm: '48px' },
                height: { xs: '34px', sm: '48px' },
                borderRadius: '50%',
              }}
              onClick={() => {
                setProject(2);
              }}
              color={project === 2 && 'primary'}
            >
              2
            </Fab>
            <Fab
              variant="extended"
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                width: { xs: '34px', sm: '48px' },
                height: { xs: '34px', sm: '48px' },
                borderRadius: '50%',
              }}
              onClick={() => {
                setProject(3);
              }}
              color={project === 3 && 'primary'}
            >
              3
            </Fab>
            <Fab
              variant="extended"
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                width: { xs: '34px', sm: '48px' },
                height: { xs: '34px', sm: '48px' },
                borderRadius: '50%',
              }}
              onClick={() => {
                setProject(4);
              }}
              color={project === 4 && 'primary'}
            >
              4
            </Fab>
          </Grid>
          <Grid item xs={12} sm={9} md={8}>
            {project === 1 && <MainCard />}
            {project === 2 && <FoodPalace />}
            {project === 3 && <Crypto />}
            {project === 4 && <ToDo />}
          </Grid>
        </Grid>
      </Grid>
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
    </Paper>
  );
};

export default Projects;
