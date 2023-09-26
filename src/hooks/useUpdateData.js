import baseUrl from "../Api/baseURL";

// PUT

// Send any data to any api with image
const useUpdateDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.put(url, params, config);
  console.log(res.status);
  return res;
};

// Send any data to any api without image
const useUpdateData = async (url, params) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.put(url, params, config);
  return res;
};

export { useUpdateData, useUpdateDataWithImage };
