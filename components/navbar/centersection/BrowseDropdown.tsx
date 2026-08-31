"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { browserItems } from "../nav-links";

const BrowseDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-zinc-600 hover:bg-transparent hover:text-emerald-600">
            Browse
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="w-190 p-5">
              {/* Featured Banner */}

              <div
                className="
            mb-5
            overflow-hidden
            rounded-2xl
            bg-linear-to
            from-emerald-500
            to-emerald-700
            p-6
            text-white
        "
              >
                <h2 className="text-xl font-bold text-foreground">
                  Summer Gaming Sale
                </h2>

                <p className="mt-2 max-w-md text-sm text-emerald-500 ">
                  Save up to 40% on consoles, accessories and gaming
                  peripherals.
                </p>

                <Button className="mt-5 bg-white text-emerald-700 hover:bg-emerald-100">
                  Shop Now
                </Button>
              </div>

              {/* Categories */}

              <div className="grid grid-cols-2 gap-3">
                {browserItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="
                        group
                        flex
                        gap-4
                        rounded-xl
                        border
                        border-transparent
                        p-4
                        transition-all
                        duration-200
                        hover:border-emerald-200
                        hover:bg-emerald-50
                    "
                    >
                      <div
                        className="
                            rounded-xl
                            bg-emerald-100
                            p-3
                            text-emerald-600
                            transition-all
                            group-hover:scale-110
                        "
                      >
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3
                          className="
                                font-semibold
                                group-hover:text-emerald-700
                            "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                                mt-1
                                text-sm
                                text-zinc-500
                            "
                        >
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default BrowseDropdown;
