import axios from "axios";

export const addNewMovie = (add) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/addNewMovie", add)
      .then((add) => {
        dispatch({
          type: "ADD_MOVIE",
          add,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const getMovies = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/getMovies")
      .then((res) => {
        dispatch({
          type: "GET_MOVIES",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const deleteMovies = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/deleteMovie/${id}`)
      .then(() => {
        dispatch({
          type: "DELETE_MOVIE",
          id,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateMovie = (updatedMovie, id) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:5000/updateMovie/${id}`, updatedMovie)
      .then((res) => {
        dispatch({
          type: "UPDATE_MOVIE",
          res,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
