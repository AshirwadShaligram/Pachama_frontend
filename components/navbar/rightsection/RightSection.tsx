"use client";

import { Button } from "@/components/ui/button";
import CartButton from "./CartButton";
import UserDropdown from "./UserDropdown";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks/authHooks";
import { useEffect } from "react";

const RightSection = () => {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    console.log("User: ", user);
  }, [user]);

  return (
    <div className="flex items-center gap-3">
      {isLoggedIn && <CartButton />}

      {isLoggedIn ? (
        <UserDropdown user={user} isLoggedIn={isLoggedIn} />
      ) : (
        <>
          <Button variant="ghost">
            <Link href="/login">Login</Link>
          </Button>

          <Button className="rounded-full bg-emerald-600 hover:bg-emerald-700">
            <Link href="/register">Register</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default RightSection;
