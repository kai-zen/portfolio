import { Grid } from '@mui/material';
import CircularPercent from './CircularPercent';

const SkillsGrid = () => {
  return (
    <Grid item container xs={12} spacing={2}>
      <Grid item xs={0} md={1} />
      <Grid item container md={10}>
        <Grid
          xs={6}
          sm={4}
          md={3}
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularPercent text="HTML" number={80} />
        </Grid>
        <Grid
          xs={6}
          sm={4}
          md={3}
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularPercent text="CSS" number={90} />
        </Grid>
        <Grid
          xs={6}
          sm={4}
          md={3}
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularPercent text="Javascript" number={55} />
        </Grid>
        <Grid
          xs={6}
          sm={4}
          md={3}
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularPercent text="React" number={65} />
        </Grid>
        <Grid
          xs={6}
          sm={4}
          md={3}
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularPercent text="Next JS" number={50} />
        </Grid>
        <Grid
          xs={6}
          sm={4}
          md={3}
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularPercent text="Bootstrap" number={85} />
        </Grid>
        <Grid
          xs={6}
          sm={4}
          md={3}
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularPercent text="MUI" number={70} />
        </Grid>
        <Grid
          xs={6}
          sm={4}
          md={3}
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularPercent text="Git" number={25} />
        </Grid>
        <Grid
          xs={6}
          sm={4}
          md={3}
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularPercent text="Redux" number={70} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SkillsGrid;
