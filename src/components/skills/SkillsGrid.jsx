import { Grid } from '@mui/material';
import CircularPercent from './CircularPercent';

const SkillsGrid = () => {
  const data = [
    { text: 'HTML', number: '95' },
    { text: 'CSS', number: '95' },
    { text: 'Sass', number: '100' },
    { text: 'Bootstrap', number: '95' },
    { text: 'TailwindCSS', number: '85' },
    { text: 'Javascript', number: '80' },
    { text: 'Typescript', number: '70' },
    { text: 'jQuery', number: '80' },
    { text: 'React JS', number: '85' },
    { text: 'MUI', number: '90' },
    { text: 'Redux', number: '80' },
    { text: 'Next JS', number: '70' },
    { text: 'Mongoose', number: '75' },
    { text: 'Webpack', number: '60' },
    { text: 'React-query', number: '75' },
    { text: 'PWA', number: '90' },
  ];
  return (
    <Grid item container xs={12} spacing={2}>
      <Grid item xs={0} md={1} />
      <Grid item container md={10}>
        {data.map((item) => (
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
            <CircularPercent text={item.text} number={item.number} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default SkillsGrid;
