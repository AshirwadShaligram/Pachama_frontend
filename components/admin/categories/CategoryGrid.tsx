"use client";

import CategorycardSkeleton from "@/skeleton/admin/category/CategorycardSkeleton";
import CategoryCard from "./CategoryCard";
import { useCategories } from "@/hooks/useCategories";

const CategoryGrid = () => {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <CategorycardSkeleton key={item} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-destructive p-8 text-center">
        <p>Failed to load categories.</p>
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center">
        <p className="text-muted-foreground">No categories found</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryGrid;
