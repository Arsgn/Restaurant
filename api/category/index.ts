import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetCategoriesQuery = () => {
  return useQuery<CATEGORY.GetCategoriesRes>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await api.get("/category/get-category");
      return response.data;
    },
    retry: false,
  });
};

const useCreateCategoryMutation = () => {
  return useMutation<
    CATEGORY.CreateCategoryRes,
    Error,
    CATEGORY.CreateCategoryReq
  >({
    mutationFn: async (data) => {
      const response = await api.post("/category/post", data);
      return response.data;
    },
    retry: false,
  });
};

export { useGetCategoriesQuery, useCreateCategoryMutation };
