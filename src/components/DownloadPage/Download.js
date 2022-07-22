import React, { useState, useEffect } from "react";
import "./Download.css";
import { FiDownload } from "react-icons/fi";
import Related from "../HomePage/retatedMovies/Related";
import { useParams } from "react-router-dom";
import axios from "axios";

function Download() {
  const myId = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  const getSinleMovieData = () => {
    try {
      axios
        .get(`http://localhost:5000/getSingleMovie/${myId.id}`)
        .then((res) => {
          setMovieDetails(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinleMovieData();
  }, []);

  return (
    <>
      <div id="download">
        <div className="detail">
          <div className="imageBox">
            <img
              src={`http://localhost:5000/public/images/${movieDetails?.data?.picture}`}
              alt={movieDetails?.data?.picture}
            />
          </div>
          <div className="info">
            <h3 className="mb-0 mt-3 text-center">File Information</h3>
          </div>
          <div className="movieDetails">
            <div className="box">
              <p>
                <b>Name:</b>
              </p>
              <p className="pink">{movieDetails?.data?.title}</p>
            </div>
            <div className="box">
              <p>
                <b>Genre:</b>
              </p>
              <p className="red">{movieDetails?.data?.genre}</p>
            </div>
            <div className="box">
              <p>
                <b>Duration:</b>
              </p>
              <p className="green">{movieDetails?.data?.duration}</p>
            </div>
            <div className="box">
              <p>
                <b>Release Date:</b>
              </p>
              <p className="orange">{movieDetails?.data?.releaseDate}</p>
            </div>
            <div className="box">
              <p>
                <b>Size:</b>
              </p>
              <p className="yellow">{movieDetails?.data?.size}</p>
            </div>
            <div className="box">
              <p>
                <b>Language:</b>
              </p>
              <p className="green">{movieDetails?.data?.language}</p>
            </div>
            <div className="box">
              <p>
                <b>Description:</b>
              </p>
              <p className="gray">{movieDetails?.data?.description}</p>
            </div>
          </div>
        </div>
        <div className="downloadBtn">
          <a href="#">
            Download <FiDownload className="icon" />
          </a>
        </div>
        <div className="mt-4">
          <h1 className="mb-1 text-center">Related Movies</h1>
          <Related />
        </div>
      </div>
    </>
  );
}

export default Download;
