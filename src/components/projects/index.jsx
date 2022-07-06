import { ChevronLeft } from '@mui/icons-material';
import {
  Button,
  Collapse,
  Divider,
  Fab,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CarShop from './CarShop';
import Crypto from './Crypto';
import FoodPalace from './FoodPalace';
import MainCard from './MainCard';
import ToDo from './TodoList';
import SassResturant from './SassResturant';

const Projects = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState(1);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  useEffect(() => {
    setChecked(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    setChecked5(false);
    setChecked6(false);
    project === 1 && setChecked(true);
    project === 2 && setChecked2(true);
    project === 3 && setChecked3(true);
    project === 4 && setChecked4(true);
    project === 5 && setChecked5(true);
    project === 6 && setChecked6(true);
  }, [project]);

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
            <Divider sx={{ width: '100%' }} />
            <Divider sx={{ width: '100%' }} />
            <Divider sx={{ width: '100%' }} />
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
              justifyContent: { xs: 'center', sm: 'flex-start' },
              mt: { xs: 0, sm: '80px' },
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
                setProject(5);
              }}
              color={project === 5 && 'primary'}
            >
              5
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
                setProject(6);
              }}
              color={project === 6 && 'primary'}
            >
              6
            </Fab>
          </Grid>
          <Grid item xs={12} sm={9} md={8}>
            <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
              <MainCard />
            </Collapse>
            <Collapse in={checked2} {...(checked2 ? { timeout: 2000 } : {})}>
              <FoodPalace />
            </Collapse>
            <Collapse in={checked3} {...(checked3 ? { timeout: 2000 } : {})}>
              <Crypto />
            </Collapse>
            <Collapse in={checked4} {...(checked4 ? { timeout: 2000 } : {})}>
              <ToDo />
            </Collapse>
            <Collapse in={checked5} {...(checked5 ? { timeout: 2000 } : {})}>
              <CarShop />
            </Collapse>
            <Collapse in={checked6} {...(checked6 ? { timeout: 2000 } : {})}>
              <SassResturant />
            </Collapse>
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
          navigate('/Work-experience');
        }}
      >
        Work exp
      </Button>
    </Paper>
  );
};

export default Projects;
