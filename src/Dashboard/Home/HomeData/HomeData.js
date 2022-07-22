import React, { useState, useEffect } from "react";
import AddNew from "./Modals/AddNew";
import "./HomeData.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, deleteMovies } from "../../../Redux/Actions/MoviesAction";
import AddCategory from "./Modals/AddCategory";

function HomeData() {
  const [addMovie, setAddMovie] = useState({
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
  const dispatch = useDispatch();
  const list = useSelector((state) => state.MoviesReducer.list);

  useEffect(() => {
    withoutReload();
  });

  function withoutReload() {
    dispatch(getMovies());
  }

  const handleDelete = (id) => {
    dispatch(deleteMovies(id));
    withoutReload();
  };
  const handleUpdate = (data) => {
    setAddMovie(data);
    handleModalUpdateBtn();
  };

  const [addNew, setAddNew] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBtn, setModalBtn] = useState("");
  const handleModalAddBtn = () => {
    setModalTitle("Add New Movie");
    setModalBtn("Add Movie");
    setAddNew(true);
  };
  const handleModalUpdateBtn = () => {
    setModalTitle("Edit Movie");
    setModalBtn("Update Movie");
    setAddNew(true);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  let dataSearch = list.filter((val) =>
    val.title?.toLowerCase().includes(searchTerm?.toLowerCase())
  );
  const [sliceMovies, setSliceMovies] = useState(7);
  const allMovies = dataSearch.slice(0, sliceMovies);
  const loadMoreMovies = () => {
    setSliceMovies(sliceMovies + sliceMovies);
  };

  return (
    <>
      <div id="homeData">
        <div className="homeNav">
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch.bind(this)}
          />
          <button onClick={() => setCategoryModal(true)}>Add Category</button>
          <button onClick={handleModalAddBtn}>Add Movie</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataSearch.length > 0 ? (
              allMovies.map((data, index) => (
                <tr key={index}>
                  <td>{data._id}</td>
                  <td>{data.title}</td>
                  <td>
                    <button
                      className="deleteBtn"
                      onClick={() => handleDelete(data._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="updateBtn"
                      onClick={() => handleUpdate(data)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="mt-2">
                <td>Movie not found</td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="cancelBtn">
          <button onClick={loadMoreMovies}>Load More</button>
        </div>
        <div>
          <AddNew
            addNew={addNew}
            setAddNew={setAddNew}
            addMovie={addMovie}
            setAddMovie={setAddMovie}
            modalTitle={modalTitle}
            modalBtn={modalBtn}
          />
        </div>
        <div>
          <AddCategory
            categoryModal={categoryModal}
            setCategoryModal={setCategoryModal}
          />
        </div>
      </div>
    </>
  );
}

export default HomeData;
