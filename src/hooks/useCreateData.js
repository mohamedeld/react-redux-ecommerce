import baseURL from "../Api/baseURL";

export async function useCreateData(url,data){
  const response = await baseURL.post(url,data,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
  });
  console.log(response)
  return response
} 