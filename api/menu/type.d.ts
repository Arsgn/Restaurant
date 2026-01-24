namespace MENU {
  export type Extra = {
    title: string;
    price: number;
  };

  export type Drink = {
    title: string;
    price: number;
  };

  export type Menu = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    ingredients: string;
    categoryId: number;
    category: {
      id: number;
      name: string;
    };
    extras: Extra[];   
    drinks: Drink[];   
  };

  export type GetMenusRes = {
    success: boolean;
    data: Menu[];
  };

  export type GetMenusReq = {
    search?: string;
  };

  export type CreateMenusRes = {
    success: boolean;
    data: Menu;
  };

  export type CreateMenusReq = {
    title: string;
    description: string;
    price: number;
    image: string;
    ingredients?: string;
    categoryId?: number;
  };

  export type UpdateMenuRes = {
    success: boolean;
    updatedMenu: Menu;
  };

  export type UpdateMenuReq = {
    id: number;
    title?: string;
    description?: string;
    price?: number;
    image?: string;
    ingredients?: string;
    categoryId?: number;
  };

  export type DeleteMenuRes = {
    success: boolean;
    delMenu: Menu;
  };

  export type DeleteMenuReq = {
    id: number;
  };
}
