import { ThemeProvider } from "@emotion/react";
import Layout from "./components/layout";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import { theme } from "./assets/customTheme";
import { Home, Projects, Skills } from "./pages";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
