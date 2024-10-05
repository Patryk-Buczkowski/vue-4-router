import axios from "axios";

export const client = axios.create({
  baseURL: "https://travel-dummy-api.netlify.app/",
});

export const getData = async (place: string) => {
  const response = await client.get(`/${place}.json`);

  return response.data;
};
