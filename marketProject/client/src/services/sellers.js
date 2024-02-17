import { useQuery } from "react-query";
import axios from "axios";

export const useGetSellers = () => {
  return useQuery("sellers", async () => {
    const response = await axios.get("http://localhost:3000/sellers");
    return response.data;
  });
};

export const useGetProducts = () => {
  return useQuery("products", async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  });
};

export const useGetChecks = () => {
  return useQuery("checks", async () => {
    const response = await axios.get("http://localhost:3000/checks");
    return response.data;
  });
};
