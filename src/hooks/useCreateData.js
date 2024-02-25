import baseURL from "../Api/baseURL";

export async function useCreateData(url,data){
  const response = await baseURL.post(url,data,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
  });
  return response
} 

export async function useCreateDataWithoutImage(url,data){
  const response = await baseURL.post(url,data,{
    headers:{
      'Content-Type':'application/json'
    }
  })
  return response;
}