import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND, GET_ONE_BRAND } from "../type";

const initial = {
  brand: [],
  oneBrand: [],
  loading: true,
};

const brandReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case CREATE_BRAND:
      return {
        brand: action.payload,
        loading: false,
      };
    case GET_ONE_BRAND:
      return {
        oneBrand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        brand: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default brandReducer;

/*
    1. Create Reducer.
    2. Create Types (Get, Create, error, ...).
    3. Add the new reducer in rootReducer.
    4. Create new action.
    5. Fetch the data.
*/
