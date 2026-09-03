import { ComponentType } from "react";

export interface Category {
  title: string;
  description: string;
  image: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  href: string;
}

export interface AdminCategories {
  id: string;
  title: string;
  description: string;
  image: string;
  logo: ComponentType<{ size?: number; className?: string }>;
  isVisible: boolean;
  activeProducts: number;
  subCategories: SubCategories[];
}

interface SubCategories {
  id: number;
  name: string;
  isVisible: boolean;
}
