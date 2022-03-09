import { ThemeProvider } from '@emotion/react';
import HomePage from './components/Home';
import { createTheme } from '@mui/material';
import { amber, cyan } from '@mui/material/colors';
import Layout from './components/layout';
import Projects from './components/projects';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Skills from './components/skills';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: cyan[400],
      },
      secondary: {
        main: amber[600],
      },
    },
    typography: {
      allVariants: {
        fontFamily: 'Fredoka',
      },
    },
  });
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
