import { GET_ALL_BRAND, CREATE_BRAND, GET_ONE_BRAND, GET_ERROR } from "../type";
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

// Get all brand
export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=${limit}`); 
    dispatch({
      // ممكن أكتبها عطول عادي بس افضل اني اكتبها بفايل لحال واستدعيها عشان لما بدي اغيرها يكون التغيير من الفايل ويسمّع فباقي الاسادعاءات
      type: GET_ALL_BRAND, 
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get one brand
export const getOneBrand = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands/${id}`); 
    dispatch({
      // ممكن أكتبها عطول عادي بس افضل اني اكتبها بفايل لحال واستدعيها عشان لما بدي اغيرها يكون التغيير من الفايل ويسمّع فباقي الاسادعاءات
      type: GET_ONE_BRAND, 
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get all brand with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/brands?limit=4&page=${page}`
    ); // بتجيب البيانات

    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Insert brand with pagination
export const createBrand = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`api/v1/brands`, formData); // بتجيب البيانات
    dispatch({
      type: CREATE_BRAND,
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
