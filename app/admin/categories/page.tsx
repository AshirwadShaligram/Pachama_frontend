"use client";

import CategoryGrid from "@/components/admin/categories/CategoryGrid";
import CreateCategoryPage from "@/components/admin/categories/CreateCategoryPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { adminCategories } from "@/data/categories";
import { useCategories } from "@/hooks/useCategories";
import { useState } from "react";
import { Bezier2, Edit, EyeClosed, EyeOpen, Plus, Shop3 } from "reicon-react";

const AdminCategories = () => {
  const [showCreateCategory, setShowCreateCategory] = useState(false);

  const { data: categories } = useCategories();

  const totalActive = categories?.filter(
    (category) => category.isVisible,
  ).length;

  const itemMapped = categories?.reduce(
    (total, category) => total + category.activeProducts,
    0,
  );

  const hiddenStructures = categories?.filter(
    (category) => !category.isVisible,
  ).length;

  if (showCreateCategory) {
    return <CreateCategoryPage onBack={() => setShowCreateCategory(false)} />;
  }

  return (
    <div className="h-full flex flex-col items-center border-l">
      {/* Header */}
      <div className="w-full h-16 md:p-8 flex items-center justify-center text-2xl mt-1 md:justify-end md:ml-5">
        <Input className="w-52" placeholder="Search deals..." />
      </div>
      <div className="w-full flex-1 p-6">
        {/* Details */}
        <div className="flex justify-between items-center gap-2">
          <div className=" flex flex-col gap-2">
            <h1 className="text-5xl md:w-6xl font-semibold">Categories</h1>
            <p className="text-gray-500 text-sm md:text-xl">
              Orgainze and control the visibility of product taxonomy. Changes
              reflect immediately on the global storefront.
            </p>
          </div>

          <div>
            <Button
              className="md:w-40 md:h-12 font-semibold md:text-lg"
              onClick={() => setShowCreateCategory(true)}
            >
              <Plus />
              New Category
            </Button>
          </div>
        </div>

        {/* Cards  */}
        <div className="flex flex-col md:flex-row gap-3 mt-6 mb-3 justify-between">
          <Card className="max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-gray-600">TOTAL ACTIVE</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <h1 className="text-6xl font-bold">{totalActive}</h1>
              <Bezier2 size={32} />
            </CardContent>
          </Card>
          <Card className="max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-gray-600">ITEMS MAPPED</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <h1 className="text-6xl font-bold">{itemMapped}</h1>
              <Shop3 size={32} />
            </CardContent>
          </Card>
          <Card className="max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-gray-600">HIDDEN STRCTRS</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <h1 className="text-6xl font-bold">{hiddenStructures}</h1>
              <EyeClosed size={32} />
            </CardContent>
          </Card>
        </div>

        {/* Category Data */}
        <div className="mt-8 space-y-6">
          <section>
            <CategoryGrid />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
