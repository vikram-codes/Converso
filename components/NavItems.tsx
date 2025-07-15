"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/companions", label: "Companions" },
  { href: "/my-journey", label: "My Journey" },
];

function NavItems() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex items-center gap-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            pathname === item.href ? "text-primay font-semibold" : ""
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavItems;
