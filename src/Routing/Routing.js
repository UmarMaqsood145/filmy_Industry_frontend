import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import ContactUs from "../components/contactUs/ContactUs";
import AboutUs from "../components/AboutUs/AboutUs";
import Download from "../components/DownloadPage/Download";
import Disclaimer from "../components/Disclaimer/Disclaimer";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import EroorPage from "../components/ErrorPage/ErrorPage";
import WithNav from "./WithNav";
import WithOutNav from "./WithOutNav";
import ScrollToTop from "./ScrollToTop";
import BackToTopButton from "./BackToTopButton";
import Login from "../Dashboard/login/Login";
import Home from "../Dashboard/Home/Home";

function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/download-movie/:id" element={<Download />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
          <Route element={<WithOutNav />}>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<EroorPage />} />
            <Route path="/dashboard" element={<Home />} />
          </Route>
        </Routes>
        <BackToTopButton />
        <ScrollToTop />
      </Router>
    </>
  );
}

export default Routing;
