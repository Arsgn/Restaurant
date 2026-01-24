namespace MENU {
  type Extra = {
    title: string;
    price: number;
  };

  type Drink = {
    title: string;
    price: number;
  };

  type Menu = {
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

  type GetMenusRes = {
    success: boolean;
    data: Menu[];
  };

  type GetMenusReq = {
    search?: string;
  };

  type CreateMenusRes = {
    success: boolean;
    data: Menu;
  };

  type CreateMenusReq = {
    title: string;
    description: string;
    price: number;
    image: string;
    ingredients?: string;
    categoryId?: number;
  };

  type UpdateMenuRes = {
    success: boolean;
    updatedMenu: Menu;
  };

  type UpdateMenuReq = {
    id: number;
    title?: string;
    description?: string;
    price?: number;
    image?: string;
    ingredients?: string;
    categoryId?: number;
  };

  type DeleteMenuRes = {
    success: boolean;
    delMenu: Menu;
  };

  type DeleteMenuReq = {
    id: number;
  };
}
