import baseURL from "../Api/baseURL";

export async function useDeleteData(url){
  const response = await baseURL.delete(url,{
    headers:{
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  });
  return response;
}