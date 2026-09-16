import axiosApi from "@/lib/axios";
import {
  CategoryResponse,
  CreateCategoryRequest,
  CreateCategoryResponse,
} from "@/types/CategoryTypes";

export const createCategoryService = async (
  data: CreateCategoryRequest,
): Promise<CreateCategoryResponse> => {
  const formdata = new FormData();

  formdata.append("title", data.title);
  formdata.append("description", data.description);
  formdata.append("logo", data.logo);
  formdata.append("image", data.image);

  const response = await axiosApi.post<CreateCategoryResponse>(
    "/admin/category/create-category",
    formdata,
  );

  return response.data;
};

export const getCategoriesService = async (): Promise<CategoryResponse[]> => {
  const response = await axiosApi.get<CategoryResponse[]>(
    "/admin/category/get-all-categories",
  );

  return response.data;
};

export const toggleCategoryService = async (id: string) => {
  const response = await axiosApi.patch(`/admin/category/toggle/${id}`);

  return response.data;
};
