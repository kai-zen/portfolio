import { ThemeProvider } from '@emotion/react';
import HomePage from './components/Home';
import { createTheme } from '@mui/material';
import { cyan } from '@mui/material/colors';
import Layout from './components/layout';
import Projects from './components/projects';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Skills from './components/skills';
import Dobaare from './components/dobaare/index';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: cyan[400],
      },
      // secondary: {
      //   main: pink[300],
      // },
    },
    typography: {
      allVariants: {
        fontFamily: 'Fredoka',
      },
    },
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Work-experience" element={<Dobaare />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
