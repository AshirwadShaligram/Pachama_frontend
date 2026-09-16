export interface CreateCategoryRequest {
  title: string;
  description: string;
  logo: string;
  image: File;
}

export interface CategoryResponse {
  id: string;
  title: string;
  description: string;
  logo: string;
  isVisible: boolean;
  activeProducts: number;
  image: string;
  subCategories: SubCategoryResponse[];
}

export interface SubCategoryResponse {
  id: string;
  name: string;
  isVisible: boolean;
  categoryId: string;
}

export interface CreateCategoryResponse {
  message: string;
  category: CategoryResponse;
}
