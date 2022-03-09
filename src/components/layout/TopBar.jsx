import {
  Email,
  Home,
  InsertDriveFile,
  Phone,
  Snowboarding,
  Sort,
} from '@mui/icons-material';
import {
  AppBar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

export default function TopBar({ activeItem }) {
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
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            color: '#fff',
            fontSize: '1.3rem',
            fontFamily: 'Dancing Script',
          }}
        >
          Ali Razipur
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Typography
            sx={{ m: '18px 26px', opacity: '.65' }}
            className={'layout-menu active'}
          >
            Home
          </Typography>
          <Typography sx={{ m: '18px 0', opacity: '.65' }}>Projects</Typography>
          <Typography sx={{ m: '18px 26px', opacity: '.65' }}>
            Skills
          </Typography>
        </Box>
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
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Email fontSize="small" />
            </ListItemIcon>
            alirazipur2001@gmail.com
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Phone fontSize="small" />
            </ListItemIcon>
            +98 991 716 6019
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
