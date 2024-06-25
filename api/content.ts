import { axios } from "./axios";

// const ENDPOINT = "/project";
const ENDPOINT = "/content-page/";

export async function getContent(slug: string) {
  const { data } = await axios.get(ENDPOINT + slug);
  return data;
}
