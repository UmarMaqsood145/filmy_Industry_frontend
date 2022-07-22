import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./Routing/Routing";
import LoaderComp from "./components/Loader/Loader";

function App() {
  const [loader, setLoader] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 1000);
  }, []);
  return <>{loader ? <Routing /> : <LoaderComp />}</>;
}

export default App;
