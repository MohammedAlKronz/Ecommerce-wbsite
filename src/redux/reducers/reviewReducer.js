// ...state ==> القيمة القديمة
// action.payload  ==> Actual data
import { CREATE_REVIEW, ALL_REVIEW_PRODUCT, DELETE_REVIEW, EDIT_REVIEW } from "../type";

const initial = {
  review: [],
  allReviewProduct: [],
  deleteReview: [],
  editReview: [],
  loading: true,
};

const reviewReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        review: action.payload,
        loading: false,
      };
    case ALL_REVIEW_PRODUCT:
      return {
        ...state,
        allReviewProduct: action.payload,
        loading: false,
      };
    case DELETE_REVIEW:
      return {
        ...state,
        deleteReview: action.payload,
        loading: false,
      };
    case EDIT_REVIEW:
      return {
        ...state,
        editReview: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reviewReducer;
