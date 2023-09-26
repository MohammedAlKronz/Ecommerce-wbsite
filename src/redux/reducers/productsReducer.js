import { CREATE_PRODUCTS, GET_ALL_PRODUCTS, GET_PRODUCT_DETAILS, GET_PRODUCTS_LIKE, DELETE_PRODUCTS, UPDATE_PRODUCTS, GET_ERROR } from "../type";

const initial = {
  products: [],
  allProducts: [],
  oneProduct: [],
  productsYouLike: [],
  deleteProducts: [],
  updateProducts: [],
  loading: true,
};

const productsReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        allProducts: action.payload,
        loading: false,
      };
    case CREATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCT_DETAILS:
      return {
        oneProduct: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_LIKE:
      return {
        ...state,
        productsYouLike: action.payload,
        loading: false,
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
        deleteProducts: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        updateProducts: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        products: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default productsReducer;
