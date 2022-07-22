const initialData = {
  list: [],
};

export const MoviesReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [action.add.data, ...state];
    case "GET_MOVIES":
      return {
        list: action.payload,
      };
    case "UPDATE_MOVIE":
      return state.map((up) =>
        up._id === action.up.data._id ? action.up.data : up
      );
    case "DELETE_MOVIE":
      return state.filter((del) => del._id !== action.id);
    default:
      return state;
  }
};
