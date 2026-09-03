import axiosApi from "@/lib/axios";
import { AdminCategories } from "@/types/CategoryTypes";

export const getCategoriesService = async (): Promise<AdminCategories[]> => {
  const res = await axiosApi.get("/category/get-all-categories");

  return res.data;
};
