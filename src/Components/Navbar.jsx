import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAPI } from "../Store/Auth/auth.action";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAPI(dispatch);
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogout}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
