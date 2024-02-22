import baseURL from "../Api/baseURL";

export async function useGetData(url,params){
  const response = await baseURL.get(url,params);
  return response;
}