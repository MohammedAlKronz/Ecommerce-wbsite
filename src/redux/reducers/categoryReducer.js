// ...state ==> القيمة القديمة
// action.payload  ==> Actual data
import { GET_ALL_CATEGORY, CREATE_CATEGORY, GET_ONE_CATEGORY, GET_ERROR } from "../type";

const initial = {
  category: [],
  oneCategory: [],
  loading: true,
};

const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state, // القيمة القديمة
        category: action.payload, // التحديثات الجديدة
        loading: false, // يعني التحميل تم الانتهاء منه
      };
    case CREATE_CATEGORY: 
      return {
        category: action.payload,
        loading: false, 
      }  
    case GET_ONE_CATEGORY: 
      return {
        oneCategory: action.payload,
        loading: false, 
      }  
    case GET_ERROR:
      return {
        category: action.payload, // قيمة الايرور
        loading: true,
      };
    default:
      return state;
  }
};

export default categoryReducer;
