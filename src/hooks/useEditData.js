import baseURL from "../Api/baseURL";

export async function useEditData(url,data){
  const response = await baseURL.put(url,data,{
    headers:{
      'Content-Type':'multipart/form-data',
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
  })
  return response; 
}

export async function useEditDataWithoutImage(url,data){
  const response = await baseURL.put(url,data,{
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  });
  return response;
}