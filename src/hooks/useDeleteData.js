import baseURL from "../Api/baseURL";

export async function useDeleteData(url,params){
  const response = await baseURL.delete(url,params);
  return response;
}