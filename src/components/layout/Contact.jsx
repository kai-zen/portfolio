import {
  Close,
  ContactPhone,
  GitHub,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';
import { Fab } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { useState } from 'react';

const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Fab
        aria-label="add"
        sx={{
          backgroundColor: cyan[800],
          position: 'fixed',
          bottom: '5%',
          right: '10%',
          color: 'white',
          transition: '.8s',
          zIndex: '5',
          '&:hover': {
            color: cyan[800],
          },
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <Close /> : <ContactPhone />}
      </Fab>
      <Fab
        size="medium"
        aria-label="add"
        sx={{
          backgroundColor: cyan[800],
          position: 'fixed',
          bottom: !open ? '5%' : 'calc(5% + 76px)',
          right: '10%',
          color: 'white',
          transition: '.5s',
          zIndex: '3',
          '&:hover': {
            color: cyan[800],
          },
        }}
        onClick={() => {
          setOpen(!open);
          window.open('https://github.com/kai-zen', '_blank');
        }}
      >
        <GitHub />
      </Fab>
      <Fab
        size="medium"
        aria-label="add"
        sx={{
          backgroundColor: cyan[800],
          position: 'fixed',
          bottom: !open ? '5%' : 'calc(5% + 54px)',
          right: !open ? '10%' : 'calc(10% + 54px)',
          color: 'white',
          transition: '.5s',
          zIndex: '3',
          '&:hover': {
            color: cyan[800],
          },
        }}
        onClick={() => {
          setOpen(!open);
          window.open(
            'https://linkedin.com/in/ali-razipur-037893225',
            '_blank'
          );
        }}
      >
        <LinkedIn />
      </Fab>
      <Fab
        size="medium"
        aria-label="add"
        sx={{
          backgroundColor: cyan[800],
          position: 'fixed',
          bottom: '5%',
          right: !open ? '10%' : 'calc(10% + 76px)',
          color: 'white',
          transition: '.5s',
          zIndex: '3',
          '&:hover': {
            color: cyan[800],
          },
        }}
        onClick={() => {
          setOpen(!open);
          window.open('https://www.instagram.com/ali.razipur/', '_blank');
        }}
      >
        <Instagram />
      </Fab>
    </>
  );
};

export default Contact;
