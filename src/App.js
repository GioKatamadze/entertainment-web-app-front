import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "routing/ProtectedRoute.js";

import Home from "pages/homepage/HomePage.jsx";
import Movies from "pages/movies/MoviesPage.jsx";
import TVseries from "pages/tvseries/TVseriesPage.jsx";
import Login from "pages/login/Login.jsx";
import SignUp from "pages/signup/SignUp.jsx";
import UserPage from "pages/user/UserPage.jsx";

function App() {
  return (
    <div style={{ maxWidth: "100%", height: "100%" }}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/user" element={<UserPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TVseries />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
