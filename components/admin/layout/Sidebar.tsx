"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { Menu, CloseSquare, Logout, Setting } from "reicon-react";
import { sidebarLink } from "./sidebar-link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md border bg-white"
        aria-label="Open sidebar"
      >
        <Menu size="22" />
      </button>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`
          h-full flex flex-col bg-white z-50
          fixed top-0 left-0 w-56 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:w-44
        `}
      >
        {/* LOGO */}
        <div className="h-28 flex border-b-2 mb-5 gap-3 justify-center items-center relative">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={"/icon2.png"}
              alt="Pachama"
              width={32}
              height={32}
              priority
            />
            <span className="flex text-lg font-semibold tracking-tight">
              Pachama
            </span>
          </Link>

          {/* Mobile close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden absolute right-3 top-3 p-1"
            aria-label="Close sidebar"
          >
            <CloseSquare size="20" />
          </button>
        </div>

        {/* Navs */}
        <div className="flex flex-1 flex-col border-b-2 mb-5 gap-3">
          {sidebarLink.map((item) => {
            const Icon = item.icon;
            const isActive = pathName === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={` p-1 flex items-center ml-3 gap-5 rounded-md ${
                  isActive ? "bg-gray-100 font-medium" : ""
                }`}
              >
                <Icon />
                <span className="flex text-md">{item.title}</span>
              </Link>
            );
          })}
        </div>

        {/* Setting and Logout button */}
        <div className="flex flex-col border-b-2 mb-5 gap-3">
          <Link
            href="/settings"
            onClick={() => setIsOpen(false)}
            className="w-full p-1 flex items-center ml-3 gap-5"
          >
            <Setting />
            <span className="flex text-md">Settings</span>
          </Link>
          <button className="w-full p-1 flex items-center ml-3 mb-3 gap-5">
            <Logout />
            <span className="flex text-md">Logout</span>
          </button>
        </div>

        {/* User Info */}
        <div className="w-full h-32 p-1 flex gap-3">
          <div className="ml-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AG</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg">Admin</h1>
            <span className="text-sm text-gray-500">Profile</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
