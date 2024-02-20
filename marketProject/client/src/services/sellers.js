import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

export const useGetSellers = () => {
  return useQuery("sellers", async () => {
    const response = await axios.get("http://localhost:3000/sellers");
    return response.data;
  });
};

export const useAddSeller = () => {
  const queryClient = useQueryClient();
  return useMutation(async ({ firstName, lastName }) => {
    const response = await axios.post("http://localhost:3000/sellers", {
      firstName,
      lastName,
    });
    queryClient.invalidateQueries({ queryKey: ["sellers"] });
    return response.data;
  });
};
export const useDeleteSeller = () => {
  const queryClient = useQueryClient();
  return useMutation(async (id) => {
    const response = await axios.delete(`http://localhost:3000/sellers/${id}`);
    queryClient.invalidateQueries({ queryKey: ["sellers"] });
    return response.data;
  });
};
