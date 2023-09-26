// Action ==> الحجات الي انا عاوز اعملها على الداتا المخزنة في الستور || وكمان هي عبارة عن ميثود
// type === action.type
// res.data === القيمة الي راجعة الي من الباك اند
import { GET_ALL_CATEGORY, CREATE_CATEGORY, GET_ONE_CATEGORY, GET_ERROR } from "../type";
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

// Get all category
export const getAllCategory = (limit) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useGetData(`/api/v1/categories?limit=${limit}`); // بتجيب البيانات
    // console.log(response.data);

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get one category
export const getOneCategory = (id) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useGetData(`/api/v1/categories/${id}`); // بتجيب البيانات
    // console.log(response.data);

    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Insert category with pagination
export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useGetData(
      `/api/v1/categories?limit=10&page=${page}`
    ); // بتجيب البيانات
    // console.log(response.data);

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// createCategory => بتاخد متغير هو البيانات الي انا حبعتها .. وبكون عبارة عن فورم داتا وهاي بتكون لما ابعت صور 

// Create category
export const createCategory = (formData) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useInsertDataWithImage(`api/v1/categories`, formData); // بتجيب البيانات
    // console.log(response.data);

    dispatch({
      type: CREATE_CATEGORY,
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


/*
اي حاجة فالاكشن حأستخدم فيها (async, await)
لازم أعملها (Higher Order function)
by dispatch
*/
