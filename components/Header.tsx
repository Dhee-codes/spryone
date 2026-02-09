'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          onClick={() => setMenuOpen(true)}
          >
          <svg
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
        closeMenu={() => setMenuOpen(false)}
      />
    </>
  );
};
