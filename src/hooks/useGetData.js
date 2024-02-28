import baseURL from "../Api/baseURL";

export async function useGetData(url,params){
  
  const response = await baseURL.get(url,params);
  return response;
}
export async function useGetLoggedUser(url){
  const config = {
    headers:{
      'Authorization':`Bearer ${localStorage.getItem("token")}`
    }
  }
  const response = await baseURL.get(url,config);
  return response;
}