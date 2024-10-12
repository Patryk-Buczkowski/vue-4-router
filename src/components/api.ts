import axios from "axios";
import { useRouter } from "vue-router";


export const client = axios.create({
  baseURL: "https://travel-dummy-api.netlify.app/",
});

export const getData = async (place: string) => {
  const router = useRouter();
  try {
    const response = await client.get(`/${place}.json`);
    return response.data;
  } catch (error) {
    router.push('not-found');
  }
};


