import { getCategoriesService } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesService,
  });
};
