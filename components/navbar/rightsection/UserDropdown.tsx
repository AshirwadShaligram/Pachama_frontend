"use client";

import {
  ArrowDown2,
  Heart2,
  Logout2Newicons,
  ShieldUser,
  ShoppingBag,
  Store,
  User2,
} from "reicon-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { User } from "@/types/authTypes";
import { logoutUser } from "@/redux/slice/authSlice";
import { useAppDispatch } from "@/redux/hooks/authHooks";
import { toast } from "sonner";

type UserDropdownProps = {
  user: User | null;
  isLoggedIn: boolean;
};

const UserDropdown = ({ user, isLoggedIn }: UserDropdownProps) => {
  const isSeller = user?.role === "Seller";
  const isAdmin = user?.role === "Admin";

  const dispatch = useAppDispatch();

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
    <DropdownMenu>
      <DropdownMenuTrigger className="h-auto rounded-full p-1 transition-all duration-200 hover:bg-zinc-100">
        <div className="flex items-center gap-1">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
          <ArrowDown2 size={18} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-58 rounded-xl">
        {isLoggedIn && (
          <>
            <DropdownMenuItem>
              <Link href="/account" className="flex items-center gap-3">
                <User2 className="h-4 w-4" />
                Account
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href="/order" className="flex items-center gap-3">
                <ShoppingBag className="h-4 w-4" />
                Orders
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href="/wishlist" className="flex items-center gap-3">
                <Heart2 className="h-4 w-4" />
                Wishlist
              </Link>
            </DropdownMenuItem>

            {isSeller && (
              <DropdownMenuItem>
                <Link href="/seller" className="flex items-center gap-3">
                  <Store className="h-4 w-4" />
                  Seller Dashboard
                </Link>
              </DropdownMenuItem>
            )}

            {isAdmin && (
              <DropdownMenuItem>
                <Link href="/admin" className="flex items-center gap-3">
                  <ShieldUser className=" h-4 w-4" />
                  Admin Dashboard
                </Link>
              </DropdownMenuItem>
            )}

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-500 focus:text-red-500"
            >
              <Logout2Newicons className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
