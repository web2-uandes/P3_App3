import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./TopBar";
import { Routes, Route } from "react-router-dom";
import Evaluations from "./pages/Evaluations";
import Groups from "./pages/Groups";
import Dashboard from './pages/Dashboard'

function App() {
  const [theme, colorMode] = useMode();

  return (
    <div className="app">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Evaluations" element={<Evaluations />} />
                <Route path="/Groups" element={<Groups />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
