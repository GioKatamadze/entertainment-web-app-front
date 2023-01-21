import { Route, Routes } from "react-router";
import Home from "pages/homepage/HomePage.jsx";
import Login from "pages/login/Login.jsx";
import SignUp from "pages/signup/SignUp.jsx";

function App() {
  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TVseries />} />
        <Route path="/bookmarks" element={<Bookmarks />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </div>
  );
}

export default App;
