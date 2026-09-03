import { Button } from "@/components/ui/button";
import { AdminCategories } from "@/types/CategoryTypes";
import { Edit, EyeClosed, EyeOpen } from "reicon-react";

interface CategoryCardProps {
  category: AdminCategories;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Logo = category.logo;

  return (
    <div className="relative h-160 rounded-xl border bg-card p-5 shadow-sm flex flex-col">
      {/* Category Image */}
      <div className="flex-1 bg-amber-200">{/* Image will go here */}</div>

      {/* Logo */}
      <span className="absolute w-12 h-12 bottom-74 left-10 border-2 bg-blue-500 flex items-center justify-center rounded-lg">
        <Logo size={28} />
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

          <Button className="w-24 md:w-32 md:h-10">
            {category.isVisible ? (
              <span className="flex gap-2 items-center">
                <EyeClosed />
                Hide
              </span>
            ) : (
              <span className="flex gap-2 items-center">
                <EyeOpen />
                Show
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
