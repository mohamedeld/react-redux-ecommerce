export async function convertUrlToFile(url){
  const response = await fetch(url,{mode:'cors'});
  const data = await response.blob();
  const ext = url.split(".").pop();
  const filename = url.split("/").pop();
  const metadata = {type:`image/${ext}`};
  return new File([data],Math.random(),metadata);
}