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
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function TopBar() {
  const navigate = useNavigate();
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
            cursor: 'pointer',
          }}
          onClick={() => {
            navigate('/');
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
          <MenuItem
            onClick={() => {
              navigate('/');
              handleClose();
            }}
          >
            <ListItemIcon>
              <Home fontSize="small" />
            </ListItemIcon>
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('/projects');
              handleClose();
            }}
          >
            <ListItemIcon>
              <InsertDriveFile fontSize="small" />
            </ListItemIcon>
            Projects
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('/skills');
              handleClose();
            }}
          >
            <ListItemIcon>
              <Snowboarding fontSize="small" />
            </ListItemIcon>
            Skills
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Email fontSize="small" />
            </ListItemIcon>
            razipurali@gmail.com
          </MenuItem>
          <MenuItem>
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
