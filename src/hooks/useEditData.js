import baseURL from "../Api/baseURL";

export async function useEditData(url,data){
  const response = await baseURL.put(url,data,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
  })
  return response;
}

export async function useEditDataWithoutImage(url,data){
  const response = await baseURL.patch(url,data,{
    headers:{
      'Content-Type':'application/json'
    }
  });
  return response;
}