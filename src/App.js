import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./TopBar";
import { Routes, Route } from "react-router-dom";
import Evaluations from "./pages/Evaluations";
import Groups from "./pages/Groups";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [theme, colorMode] = useMode();
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedEvaluation, setSelectedEvaluation] = useState("");
  const [selectedActiveEvaluation, setSelectedActiveEvaluation] = useState("");
  const isAuthenticated = false;

  return (
    <div className="app">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              {isAuthenticated && (
                <Topbar
                  groups={groups}
                  setSelectedGroup={setSelectedGroup}
                  setSelectedEvaluation={setSelectedEvaluation}
                  setSelectedActiveEvaluation={setSelectedActiveEvaluation}
                />
              )}

              <Routes>
                <Route
                  path="/"
                  element={
                    <PrivateRoute
                      path="/"
                      element={<Dashboard />}
                      isAuthenticated={isAuthenticated}
                    />
                  }
                />
                <Route
                  path="/evaluations"
                  element={
                    <PrivateRoute
                      path="/evaluations"
                      element={
                        <Evaluations selectedEvaluation={selectedEvaluation} />
                      }
                      isAuthenticated={isAuthenticated}
                    />
                  }
                />
                <Route
                  path="/actives"
                  element={
                    <PrivateRoute
                      path="/actives"
                      element={
                        <Evaluations
                          selectedEvaluation={selectedActiveEvaluation}
                        />
                      }
                      isAuthenticated={isAuthenticated}
                    />
                  }
                />
                <Route
                  path="/groups"
                  element={
                    <PrivateRoute
                      path="/groups"
                      element={
                        <Groups
                          groups={groups}
                          setGroups={setGroups}
                          selectedGroup={selectedGroup}
                        />
                      }
                      isAuthenticated={isAuthenticated}
                    />
                  }
                />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
