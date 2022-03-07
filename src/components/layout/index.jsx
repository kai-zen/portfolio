import TopBar from './TopBar';
import Contact from './Contact';
import { Button } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';

const Layout = () => {
  return (
    <>
      <TopBar />
      <Contact />
      <Button
        size="large"
        sx={{
          position: 'fixed',
          left: '10%',
          bottom: '5%',
          zIndex: '3',
        }}
        startIcon={<ChevronLeft />}
      >
        Projects
      </Button>
    </>
  );
};

export default Layout;
