import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

export const useGetProducts = () => {
  return useQuery("products", async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  });
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(async (newProduct) => {
    const response = await axios.post(
      "http://localhost:3000/products",
      newProduct
    );
    queryClient.invalidateQueries({ queryKey: ["products"] });
    return response.data;
  });
};
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(async (id) => {
    const response = await axios.delete(`http://localhost:3000/products/${id}`);
    queryClient.invalidateQueries({ queryKey: ["products"] });
    return response.data;
  });
};
