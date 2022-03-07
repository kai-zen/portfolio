import { Sort } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export default function TopBar() {
  return (
    <AppBar sx={{ background: 'none' }} elevation={0}>
      <Toolbar
        sx={{
          width: '80%',
          margin: '0 auto',
        }}
      >
        <Typography
          sx={{
            flexGrow: '1',
            color: '#fff',
            fontSize: '1.3rem',
            fontFamily: 'Dancing Script',
          }}
        >
          Ali Razipur
        </Typography>
        <IconButton>
          <Sort
            sx={{
              color: '#fff',
              fontSize: '2rem',
            }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
