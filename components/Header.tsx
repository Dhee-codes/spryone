'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) closeMenu();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <>
      <header className="flex justify-between pb-[clamp(1rem,1.6vw,2rem)] border-b border-feint">
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="SpryOne logo"
              width={128}
              height={40}
              priority
            />
          </Link>
        </div>

        <button
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen(true)}
          >
          <span className="sr-only">Open Menu</span>
          <svg
            aria-hidden="true"
            className="w-13.5 h-8.5"
            viewBox="0 0 55 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M55 0.5H0" stroke="currentColor"/>
            <path d="M55 15.5H20" stroke="currentColor"/>
          </svg>
        </button>
      </header>

      <Menu
        menuOpen={menuOpen}
        closeMenu={closeMenu}
      />
    </>
  );
};
