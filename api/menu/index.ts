// services/menu/index.ts
import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '..';

const useGetMenusQuery = () => {
  return useQuery<MENU.GetMenusRes>({
    queryKey: ['menus'],
    queryFn: async () => {
      const response = await api.get('/menu/get'); // ✅ Было /get-all
      return response.data;
    },
    retry: false,
  });
};

const useCreateMenuMutation = () => {
  return useMutation<MENU.CreateMenusRes, Error, MENU.CreateMenusReq>({
    mutationFn: async (data) => {
      const response = await api.post('/menu/post', data); // ✅ Было /create
      return response.data;
    },
    retry: false,
  });
};

const useUpdateMenuMutation = () => {
  return useMutation<MENU.UpdateMenuRes, Error, MENU.UpdateMenuReq>({
    mutationFn: async (data) => {
      const response = await api.put(`/menu/put`, {  
        id: data.id,  
        title: data.title,
        description: data.description,
        price: data.price,
        image: data.image,
        ingredients: data.ingredients,
        categoryId: data.categoryId,
      });
      return response.data;
    },
    retry: false,
  });
};

const useDeleteMenuMutation = () => {
  return useMutation<MENU.DeleteMenuRes, Error, MENU.DeleteMenuReq>({
    mutationFn: async (data) => {
      const response = await api.delete(`/menu/delete/${data.id}`); // ✅ Уже правильно
      return response.data;
    },
    retry: false,
  });
};

// Удалите useToggleMenuMutation если нет такого роута на бэкенде
// const useToggleMenuMutation = () => { ... }

export {
  useGetMenusQuery,
  useCreateMenuMutation,
  useUpdateMenuMutation,
  useDeleteMenuMutation,
  // useToggleMenuMutation, // ❌ Удалите, такого роута нет
};