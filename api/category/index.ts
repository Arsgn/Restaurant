// services/category/index.ts
import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '..';

const useGetCategoriesQuery = () => {
  return useQuery<CATEGORY.GetCategoriesRes>({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await api.get('/category/get');
      return response.data;
    },
    retry: false,
  });
};

const useCreateCategoryMutation = () => {
  return useMutation<CATEGORY.CreateCategoryRes, Error, CATEGORY.CreateCategoryReq>({
    mutationFn: async (data) => {
      const response = await api.post('/category/post', data);
      return response.data;
    },
    retry: false,
  });
};

export {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
};