import useDeleteData from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { useUpdateData } from "../../hooks/useUpdateData";
import { CREATE_REVIEW, ALL_REVIEW_PRODUCT, DELETE_REVIEW, EDIT_REVIEW } from "../type";

// Create rate
export const createReview = (prodID, body) => async (dispatch) => {
  try {
    const response = await useInsertData(
      `/api/v1/products/${prodID}/reviews`,
      body
    );
    dispatch({
      type: CREATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_REVIEW,
      payload: e.response,
    });
  }
};

// Get all review to one product
export const allReviewProduct = (prodID, page, limit) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`
    );
    dispatch({
      type: ALL_REVIEW_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ALL_REVIEW_PRODUCT,
      payload: e.response,
    });
  }
};

// Delete review on product
export const deleteReview = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(
      `/api/v1/reviews/${id}`
    );
    dispatch({
      type: DELETE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_REVIEW,
      payload: e.response,
    });
  }
};

// Update review on product
export const editReview = (id, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(
      `/api/v1/reviews/${id}`, body
    );
    dispatch({
      type: EDIT_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: EDIT_REVIEW,
      payload: e.response,
    });
  }
};
