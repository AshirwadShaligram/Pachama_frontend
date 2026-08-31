import { Category } from "@/types/CategoryTypes";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Logo = category.icon;
  return (
    <Link
      href={category.href}
      className="group relative overflow-hidden rounded-2xl border bg-background"
    >
      {/* ================= DESKTOP ================= */}
      <div className="relative hidden min-h-70 md:block">
        <Image
          src={category.image}
          alt={category.title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex h-full min-h-70 flex-col justify-end p-6 text-white">
          <h2 className="text-2xl font-bold">{category.title}</h2>

          <p className="mt-2 max-w-md text-sm text-white/80">
            {category.description}
          </p>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex min-h-55 flex-col justify-around items-center p-5 md:hidden">
        {/* Logo */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
          <Logo size={28} />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-foreground">
            {category.title}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
