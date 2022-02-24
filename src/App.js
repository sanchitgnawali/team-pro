import { BrowserRouter, Routes, Route } from "react-router-dom";

// stylesheet
import "./App.css";

import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Sidebar />
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={user ? <Dashboard /> : <Login />} />
              <Route path="/create" element={user ? <Create /> : <Login />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Dashboard />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Dashboard />}
              />
              <Route
                path="/projects/:id"
                element={user ? <Project /> : <Login />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
