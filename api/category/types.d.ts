// Добавьте это в ваш type.d.ts файл

namespace CATEGORY {
  type Category = {
    id: number;
    name: string;
  };

  type GetCategoriesRes = {
    success?: boolean;
    data?: Category[];
  } | Category[]; // Поддержка обоих форматов ответа

  type GetCategoriesReq = void;

  type CreateCategoryRes = {
    success: boolean;
    data: Category;
  };

  type CreateCategoryReq = {
    name: string;
  };
}

// Также обновите MENU namespace для поддержки category
namespace MENU {
  type Menu = {
    id: number;
    title: string;
    description: string;
    completed?: boolean;
    price: number;
    image: string;
    ingredients?: string[];
    category?: {
      id: number;
      name: string;
    };
    extras?: Array<{
      id: number;
      title: string;
      price: number;
    }>;
    drinks?: Array<{
      id: number;
      title: string;
      price: number;
    }>;
  };

  type GetMenusRes = {
    success: boolean;
    data: Menu[];
  };

  type GetMenusReq = void;

  type CreateMenusRes = {
    success: boolean;
    data: Menu;
  };

  type CreateMenusReq = {
    title: string;
    description: string;
    price: number;
    image: string;
    ingredients?: string[];
    categoryId?: number;
    extras?: Array<{ title: string; price: number }>;
    drinks?: Array<{ title: string; price: number }>;
  };

  type UpdateMenuRes = {
    success: boolean;
    data: Menu;
  };

  type UpdateMenuReq = {
    id: number;
    title?: string;
    description?: string;
    completed?: boolean;
    price?: number;
    image?: string;
    ingredients?: string[];
    categoryId?: number;
  };

  type DeleteMenuRes = {
    success: boolean;
    message: string;
  };

  type DeleteMenuReq = {
    id: number;
  };
}