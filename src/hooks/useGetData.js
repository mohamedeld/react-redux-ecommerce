import baseURL from "../Api/baseURL";

export async function useGetData(url,params){
  
  const response = await baseURL.get(url,params);
  return response;
}
export async function useGetLoggedUser(url,params){
  const config = {
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }
  }
  const response = await baseURL.get(url,params,config);
  return response;
}