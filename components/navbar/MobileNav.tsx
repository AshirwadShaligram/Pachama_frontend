"use client";

import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import {
  ArrowRight4,
  Heart2,
  Logout2Newicons,
  Menu,
  ShieldUser,
  ShoppingBag,
  Store,
  User2,
} from "reicon-react";
import { navLinks } from "./nav-links";
import Link from "next/link";
import { Separator } from "../ui/separator";
import Logo from "./leftsection/Logo";
import CartButton from "./rightsection/CartButton";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/authHooks";
import { logoutUser } from "@/redux/slice/authSlice";
import { toast } from "sonner";

const MobileNav = () => {
  const pathname = usePathname();

  // Hard coded
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const isSeller = user?.role === "Seller";
  const isAdmin = user?.role === "Admin";

  const dispatch = useAppDispatch();

  // Logout handler
  const handleLogout = async () => {
    try {
      const result = await dispatch(logoutUser()).unwrap();
      toast.success(result.message);
    } catch (err) {
      console.error("Logout error: ", err);
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <Logo />
      <div className="flex items-center gap-2">
        {isLoggedIn && <CartButton />}

        <Sheet>
          <SheetTrigger>
            <Menu size={22} />
          </SheetTrigger>

          <SheetContent side="right" className="w-[320px] p-0">
            <SheetHeader className="border-b p-6">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col py-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`flex items-center justify-between px-6 py-4
                    transition-colors hover:bg-emerald-50 ${
                      active
                        ? "bg-emerald-50 text-emerald-600"
                        : "text-zinc-700"
                    }
                    `}
                  >
                    <span>{link.title}</span>
                    <ArrowRight4 />
                  </Link>
                );
              })}
            </div>

            <Separator />

            <div className="my-4">
              {!isLoggedIn ? (
                <div className="space-y-2 px-6">
                  <Button className="w-full">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Link href="/register">Register</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-1 flex flex-col">
                  <SheetClose>
                    <Link
                      href="/account"
                      className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-50"
                    >
                      <User2 size={20} />
                      Account
                    </Link>
                  </SheetClose>

                  <SheetClose>
                    <Link
                      href="/orders"
                      className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-50"
                    >
                      <ShoppingBag size={20} />
                      Orders
                    </Link>
                  </SheetClose>

                  <SheetClose>
                    <Link
                      href="/wishlist"
                      className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-50"
                    >
                      <Heart2 size={20} />
                      Wishlist
                    </Link>
                  </SheetClose>

                  {isSeller && (
                    <SheetClose>
                      <Link
                        href="/seller"
                        className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-50"
                      >
                        <Store size={20} />
                        Seller Dashboard
                      </Link>
                    </SheetClose>
                  )}

                  {isAdmin && (
                    <SheetClose>
                      <Link
                        href="/admin"
                        className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-50"
                      >
                        <ShieldUser size={20} />
                        Admin Dashboard
                      </Link>
                    </SheetClose>
                  )}

                  <Separator />

                  <div className="my-4">
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-md px-6 py-3 text-red-500 transition-colors hover:bg-red-50"
                    >
                      <Logout2Newicons size={20} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
