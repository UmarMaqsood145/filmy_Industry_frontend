import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./AddNew.css";
import { useDispatch } from "react-redux";
import {
  addNewMovie,
  getMovies,
  updateMovie,
} from "../../../../Redux/Actions/MoviesAction";
function AddNew({
  addNew,
  setAddNew,
  addMovie,
  setAddMovie,
  modalTitle,
  modalBtn,
}) {
  const dispatch = useDispatch();

  let movieName, movieValue;
  const handleAddMovieInputs = (e) => {
    movieName = e.target.name;
    movieValue = e.target.value;
    setAddMovie({ ...addMovie, [movieName]: movieValue });
  };

  const handleFileinput = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAddMovie({ ...addMovie, picture: event.target.files[0] });
    }
  };

  const movieData = new FormData();
  const {
    picture,
    title,
    genre,
    duration,
    releaseDate,
    size,
    language,
    description,
    link,
    category,
    subCategory,
  } = addMovie;
  movieData.append("picture", picture);
  movieData.append("title", title);
  movieData.append("genre", genre);
  movieData.append("duration", duration);
  movieData.append("releaseDate", releaseDate);
  movieData.append("size", size);
  movieData.append("language", language);
  movieData.append("description", description);
  movieData.append("link", link);
  movieData.append("category", category);
  movieData.append("subCategory", subCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addMovie._id) {
      const id = addMovie._id;
      const updatedMovie = {
        picture: addMovie.picture,
        title: addMovie.title,
        genre: addMovie.genre,
        duration: addMovie.duration,
        releaseDate: addMovie.releaseDate,
        size: addMovie.size,
        language: addMovie.language,
        description: addMovie.description,
        link: addMovie.link,
        category: addMovie.category,
        subCategory: addMovie.subCategory,
      };

      dispatch(updateMovie(updatedMovie, id));
    } else {
      dispatch(addNewMovie(movieData));
    }
    dispatch(getMovies());
    setAddMovie({
      picture: "",
      title: "",
      genre: "",
      duration: "",
      releaseDate: "",
      size: "",
      language: "",
      description: "",
      link: "",
      category: "",
      subCategory: "",
    });
    setAddNew(false);
  };

  return (
    <>
      <Modal show={addNew} onHide={() => setAddNew(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="file"
                // accept=".png, .jpg, .jpeg .gif"
                name="picture"
                onChange={handleFileinput}
                autoFocus
              />
            </Form.Group>
            <div className="inputField">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={addMovie.title}
                  onChange={handleAddMovieInputs}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 inputForMargin"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  name="genre"
                  value={addMovie.genre}
                  onChange={handleAddMovieInputs}
                />
              </Form.Group>
            </div>
            <div className="inputField">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type="text"
                  name="duration"
                  value={addMovie.duration}
                  onChange={handleAddMovieInputs}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 inputForMargin"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  type="text"
                  name="releaseDate"
                  value={addMovie.releaseDate}
                  onChange={handleAddMovieInputs}
                />
              </Form.Group>
            </div>
            <div className="inputField">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="text"
                  name="size"
                  value={addMovie.size}
                  onChange={handleAddMovieInputs}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 inputForMargin"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Language</Form.Label>
                <Form.Control
                  type="text"
                  name="language"
                  value={addMovie.language}
                  onChange={handleAddMovieInputs}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={addMovie.description}
                onChange={handleAddMovieInputs}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                name="link"
                value={addMovie.link}
                onChange={handleAddMovieInputs}
              />
            </Form.Group>
            <div className="inputField">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={addMovie.category}
                  onChange={handleAddMovieInputs}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 inputForMargin"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Sub Category</Form.Label>
                <Form.Control
                  type="text"
                  name="subCategory"
                  value={addMovie.subCategory}
                  onChange={handleAddMovieInputs}
                />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAddNew(false)}>
            Cancel
          </Button>
          <button
            className="modalBtn"
            type="submit"
            encType="multipart/form-data"
            onClick={handleSubmit}
          >
            {modalBtn}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNew;
