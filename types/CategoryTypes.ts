import { ComponentType } from "react";

export interface Category {
  title: string;
  description: string;
  image: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  href: string;
}
