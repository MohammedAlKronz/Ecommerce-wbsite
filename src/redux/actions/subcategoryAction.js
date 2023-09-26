import { CREATE_SUB_CATEGORY, GET_SUB_CATEGORY, GET_ERROR } from "../type";
import { useInsertData } from "../../hooks/useInsertData";
import { useGetData } from "../../hooks/useGetData";

// Create sub category
export const createSubCategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/subcategories`, data);
    dispatch({
      type: CREATE_SUB_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// عشان تجيبلي التصنيفات الفرعية لتصنيف رئيسي واحد بالاعتماد على الايدي تبع التصنيف الرئيسي
// Get all category based on ID
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}/subcategories`);
    // console.log(response.data);
    dispatch({
      type: GET_SUB_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
