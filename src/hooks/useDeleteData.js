import baseURL from "../Api/baseURL";

export async function useDeleteData(url,params){
  const config = {
    headers:{
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
  }
  const response = await baseURL.delete(url,params,config);
  return response;
}