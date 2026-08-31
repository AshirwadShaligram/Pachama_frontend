"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import BrowseDropdown from "./BrowseDropdown";
import { navLinks } from "../nav-links";

const NavigationLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {navLinks.map((link) => {
        if (link.megaMenu) {
          return <BrowseDropdown key={link.title} />;
        }
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:text-emerald-600
                ${active ? "text-emerald-600" : "text-zinc-600"}
                `}
          >
            {link.title}

            <span
              className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-emerald-600
                transition-all duration-200 ${active ? "w-full" : "w-0"}
                `}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationLinks;
