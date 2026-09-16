"use client";

import { Button } from "@/components/ui/button";
import { CategoryIconName, categoryIcons } from "@/lib/category-icons";
import { toggleCategoryService } from "@/services/categoryService";
import { CategoryResponse } from "@/types/CategoryTypes";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Edit, EyeClosed, EyeOpen } from "reicon-react";

interface CategoryCardProps {
  category: CategoryResponse;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [isToggling, setIsToggling] = useState(false);

  const categoryIcon = categoryIcons[category.logo as CategoryIconName];

  const Logo = categoryIcon?.icon;
  const queryClient = useQueryClient();

  useEffect(() => {
    console.log("Category: ", category);
  }, [category]);

  const toggleCategoryMutation = useMutation({
    mutationFn: toggleCategoryService,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (error) => {
      console.error("Failed to toggle category:", error);
    },
  });

  return (
    <div className="relative h-160 rounded-xl border bg-card p-5 shadow-sm flex flex-col">
      {/* Category Image */}
      <div className="flex-1">
        <Image
          src={category.image}
          alt={category.title}
          width={800}
          height={600}
          style={{ width: "100%", height: "100%" }}
          className="object-cover"
          loading="eager"
        />
      </div>

      {/* Icon */}
      <span className="absolute w-12 h-12 bottom-74 left-10 border-2 flex items-center justify-center rounded-lg bg-black/70 text-white">
        {Logo && <Logo size={24} className="text-white" />}
      </span>

      <div className="flex-1 flex justify-center flex-col p-3 gap-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{category.title}</h1>

          <p className="text-gray-600">{category.description}</p>
        </div>

        <div className="border-t flex flex-col gap-2">
          <span className="flex justify-between mt-3">
            <h1 className="font-semibold">SUB-CATEGORIES</h1>
            <p>{category.subCategories.length}</p>
          </span>

          <span className="flex justify-between mt-3">
            <h1 className="font-semibold">ACTIVE PRODUCTS</h1>
            <p>{category.activeProducts}</p>
          </span>
        </div>

        <div className="flex justify-between">
          <Button className="w-24 md:w-32 md:h-10">
            <Edit />
            Edit
          </Button>

          <Button
            className="w-24 md:w-32 md:h-10"
            onClick={() => toggleCategoryMutation.mutate(category.id)}
            disabled={toggleCategoryMutation.isPending}
          >
            {category.isVisible ? (
              <span className="flex gap-2 items-center">
                <EyeClosed />
                {toggleCategoryMutation.isPending ? "Hiding..." : "Hide"}
              </span>
            ) : (
              <span className="flex gap-2 items-center">
                <EyeOpen />
                {toggleCategoryMutation.isPending ? "Showing..." : "Show"}
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
