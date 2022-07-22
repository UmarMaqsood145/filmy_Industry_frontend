import React, { useState, useEffect } from "react";
import "./Related.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../../Redux/Actions/MoviesAction";

function Related({ searchMovie }) {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.MoviesReducer.list);
  useEffect(() => {
    withoutReload();
  });
  function withoutReload() {
    dispatch(getMovies());
  }

  let dataSearchFilter = moviesList.filter((val) =>
    val.title?.toLowerCase().includes(searchMovie?.toLowerCase())
  );

  const [relatedProducts, setRelatedProducts] = useState(10);
  const allProducts = dataSearchFilter.slice(0, relatedProducts);
  const loadMoreProducts = () => {
    setRelatedProducts(relatedProducts + relatedProducts);
  };
  return (
    <>
      <div id="related">
        <div className="moviesContainer">
          {dataSearchFilter.length > 0 ? (
            allProducts.map((data, index) => {
              return (
                <div className="movies" key={index}>
                  <img
                    src={`http://localhost:5000/public/images/${data.picture}`}
                    alt={data.picture}
                  />
                  <div>
                    <h5 className="mb-0">{data.title}</h5>
                    <div className="cat">{data.category}</div>
                    <NavLink to={`/download-movie/${data._id}`}>View</NavLink>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="notFound">
              <p>Movie not found</p>
            </div>
          )}
        </div>
        <div className="cancelBtn">
          <button onClick={() => loadMoreProducts()}>Load More</button>
        </div>
      </div>
    </>
  );
}

export default Related;
