import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AuthorScreen from "./screens/AuthorScreen";
import FavoriteAuthorScreen from "./screens/FavoriteAuthorScreen";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <div>
          <Sidebar />
        </div>
        <div className="h-screen overflow-auto">
          <Routes>
            <Route path="/" element={<AuthorScreen />} />
            <Route path="/authors" element={<AuthorScreen />} />
            <Route
              path="/favorite-authors"
              element={<FavoriteAuthorScreen />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
