import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
import HomeData from "./HomeData/HomeData";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      console.log("Stay on Home Page");
    }
  }, []);

  return (
    <>
      <div id="home">
        <Sidebar />
        <HomeData />
      </div>
    </>
  );
}

export default Home;
