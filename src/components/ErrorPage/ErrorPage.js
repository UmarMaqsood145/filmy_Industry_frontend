import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <>
      <div id="errorPage">
        <div className="line"></div>
        <div className="pageContent">
          <h1>404</h1>
          <h4>Not Found</h4>
          <p>Oops! We can't find the page you're looking for.</p>
          <Link to="/">Go to Homepage</Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
