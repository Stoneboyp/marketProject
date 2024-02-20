import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

export const useGetChecks = () => {
  return useQuery("checks", async () => {
    const response = await axios.get("http://localhost:3000/checks");
    return response.data;
  });
};

export const useAddCheck = () => {
  const queryClient = useQueryClient();
  return useMutation(async ({ firstName, lastName, productType }) => {
    const response = await axios.post("http://localhost:3000/checks", {
      firstName,
      lastName,
      productType,
    });
    queryClient.invalidateQueries({ queryKey: ["checks"] });
    return response.data;
  });
};
export const useDeleteCheck = () => {
  const queryClient = useQueryClient();
  return useMutation(async (id) => {
    const response = await axios.delete(`http://localhost:3000/checks/${id}`);
    queryClient.invalidateQueries({ queryKey: ["checks"] });
    return response.data;
  });
};
