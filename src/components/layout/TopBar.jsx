import { Home, InsertDriveFile, Snowboarding, Sort } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function TopBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <IconButton onClick={handleClick}>
          <Sort
            sx={{
              color: '#fff',
              fontSize: '2rem',
            }}
          />
        </IconButton>
        <Menu
          id="basic-menu"
          sx={{ textAlign: 'center' }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Home fontSize="small" />
            </ListItemIcon>
            Home
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <InsertDriveFile fontSize="small" />
            </ListItemIcon>
            Projects
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Snowboarding fontSize="small" />
            </ListItemIcon>
            Skills
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
