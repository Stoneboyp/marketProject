import { useMutation, useQuery } from "react-query";
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

export const useAddSeller = () => {
  return useMutation(async ({ firstName, lastName }) => {
    const response = await axios.post(
      "http://localhost:3000/sellers/addSeller",
      {
        firstName,
        lastName,
      }
    );
    return response.data;
  });
};

export const useAddProduct = () => {
  return useMutation(async (newProduct) => {
    const response = await axios.post(
      "http://localhost:3000/products/addProduct",
      newProduct
    );
    return response.data;
  });
};
export const useAddCheck = () => {
  return useMutation(async ({ firstName, lastName, productType }) => {
    const response = await axios.post("http://localhost:3000/checks/addCheck", {
      firstName,
      lastName,
      productType,
    });
    return response.data;
  });
};
