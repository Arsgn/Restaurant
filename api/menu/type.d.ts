// type.d.ts
namespace MENU {
  // Response types
  type GetMenusRes = {
    success: boolean;
    data: Array<{
      id: number;
      title: string;
      description: string;
      completed: boolean;
      price: number;
      image: string;
    }>;
  };

  type GetMenusReq = void;

  type CreateMenusRes = {
    success: boolean;
    data: Array<{
      id: number;
      title: string;
      description: string;
      completed: boolean;
      price: number;
      image: string;
    }>;
  };

  type CreateMenusReq = {
    title: string;
    description: string;
    price: number;
    image: string;
  };

  type UpdateMenuRes = {
    success: boolean;
    data: {
      id: number;
      title: string;
      description: string;
      completed: boolean;
      price: number;
      image: string;
    };
  };

  type UpdateMenuReq = {
    id: number;
    title?: string;
    description?: string;
    completed?: boolean;
    price?: number;
    image?: string;
  };

  type DeleteMenuRes = {
    success: boolean;
    message: string;
  };

  type DeleteMenuReq = {
    id: number;
  };

  type ToggleMenuRes = {
    success: boolean;
    data: {
      id: number;
      title: string;
      description: string;
      completed: boolean;
      price: number;
      image: string;
    };
  };

  type ToggleMenuReq = {
    id: number;
  };
}