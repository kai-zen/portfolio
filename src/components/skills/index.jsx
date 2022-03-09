import { ChevronLeft } from '@mui/icons-material';
import { Button, Divider, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import SkillsGrid from './SkillsGrid';

const Skills = () => {
  const navigate = useNavigate();
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
            My Skills
            <Divider sx={{ width: '75vw' }} />
            <Divider sx={{ width: '75vw' }} />
            <Divider sx={{ width: '75vw' }} />
          </Typography>
        </Grid>
        <SkillsGrid />
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
          navigate('/');
        }}
      >
        Home
      </Button>
    </Paper>
  );
};

export default Skills;
