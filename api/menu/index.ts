import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetMenusQuery = () => {
  return useQuery<MENU.GetMenusRes>({
    queryKey: ["menus"],
    queryFn: async () => {
      const response = await api.get("/menu/get");
      return response.data;
    },
    retry: false,
  });
};

const useSearchMenusQuery = (searchQuery: string) => {
  return useQuery<MENU.GetMenusRes>({
    queryKey: ["menus", "search", searchQuery],
    queryFn: async () => {
      const response = await api.get("/menu/search", {
        params: { search: searchQuery },
      });
      return response.data;
    },
    enabled: searchQuery.length > 0,
  });
};

const useCreateMenuMutation = () => {
  return useMutation<MENU.CreateMenusRes, Error, MENU.CreateMenusReq>({
    mutationFn: async (data: MENU.CreateMenusReq) => {
      const response = await api.post("/menu/post", data);
      return response.data;
    },
    retry: false,
  });
};

const useUpdateMenuMutation = () => {
  return useMutation<MENU.UpdateMenuRes, Error, MENU.UpdateMenuReq>({
    mutationFn: async (data: MENU.UpdateMenuReq) => {
      const response = await api.put(`/menu/put/${data.id}`, {
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
    mutationFn: async (data: MENU.DeleteMenuReq) => {
      const response = await api.delete(`/menu/delete/${data.id}`);
      return response.data;
    },
    retry: false,
  });
};


export {
  useGetMenusQuery,
  useSearchMenusQuery,
  useCreateMenuMutation,
  useUpdateMenuMutation,
  useDeleteMenuMutation,
};


