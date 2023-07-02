import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./TopBar";
import { Routes, Route } from "react-router-dom";
import Evaluations from "./pages/Evaluations";
import Groups from "./pages/Groups";
import Dashboard from "./pages/Dashboard";
import ActiveEvaluations from "./pages/ActiveEvaluations";

function App() {
  const [theme, colorMode] = useMode();
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedEvaluation, setSelectedEvaluation] = useState("");

  return (
    <div className="app">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar
                groups={groups}
                setSelectedGroup={setSelectedGroup}
                setSelectedEvaluation={setSelectedEvaluation}
              />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/Evaluations"
                  element={
                    <Evaluations selectedEvaluation={selectedEvaluation} />
                  }
                />
                <Route path="/Actives" element={<ActiveEvaluations />} />
                <Route
                  path="/Groups"
                  element={
                    <Groups
                      groups={groups}
                      setGroups={setGroups}
                      selectedGroup={selectedGroup}
                    />
                  }
                />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
