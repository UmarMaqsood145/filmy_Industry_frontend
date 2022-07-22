import React, { useState } from "react";
import "./HomePage.css";
import Category from "./Category/Category";
import Related from "./retatedMovies/Related";

function HomePage() {
  const [searchMovie, setSearchMovie] = useState("");
  const handleSearchInput = (e) => {
    setSearchMovie(e.target.value);
  };

  return (
    <>
      <div id="homePage">
        <div className="homebar">
          <input
            type="search"
            placeholder="Search..."
            value={searchMovie}
            onChange={handleSearchInput.bind(this)}
          />
        </div>
        <h1>Latest Movies</h1>
        <div className="mt-2">
          <Related searchMovie={searchMovie} />
        </div>
        <div className="mt-3">
          <Category />
        </div>
      </div>
    </>
  );
}

export default HomePage;
