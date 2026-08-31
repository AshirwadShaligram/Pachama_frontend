import {
  ArchiveBox,
  Category2,
  Shop3,
  TicketDiscount,
  Tuning,
  Users3,
} from "reicon-react";

export const sidebarLink = [
  {
    title: "Dashboard",
    icon: Tuning,
    href: "/admin",
  },
  {
    title: "Products",
    icon: ArchiveBox,
    href: "/admin/products",
  },
  {
    title: "Categories",
    icon: Category2,
    href: "/admin/categories",
  },
  {
    title: "Deals",
    icon: TicketDiscount,
    href: "/admin/deals",
  },
  {
    title: "Sellers",
    icon: Shop3,
    href: "/admin/sellers",
  },
  {
    title: "Users",
    icon: Users3,
    href: "/admin/users",
  },
];
