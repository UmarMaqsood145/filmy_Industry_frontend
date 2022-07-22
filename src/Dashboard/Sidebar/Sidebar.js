import React, { useEffect } from "react";
import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    alert("You have successfully Logout...");
    navigate("/login");
  };

  useEffect(() => {
    setTimeout(() => {
      Logout();
    }, 3600000);
  });
  return (
    <>
      <div id="sideBar">
        <AiFillHome className="icons" />
        <FaSignOutAlt className="icons" onClick={Logout} />
      </div>
    </>
  );
}

export default Sidebar;
