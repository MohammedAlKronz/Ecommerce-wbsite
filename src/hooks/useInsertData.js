import baseUrl from "../Api/baseURL";

// Send any data to any api with image
const useInsertDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  // console.log(res.status);
  return res;
};

// Send any data to any api without image
const useInsertData = async (url, params) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};

export { useInsertData, useInsertDataWithImage };
