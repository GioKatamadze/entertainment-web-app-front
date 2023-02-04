import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "pages/login/Login.jsx";

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  if (!userInfo) {
    return <Login />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
