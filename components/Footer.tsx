'use client';
import { usePathname } from "next/navigation";
import { Newsletter } from "./Newsletter";
import Link from "next/link";

export const Footer = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  const linkClasses = (href: string) =>
  `relative inline-block pb-1
   after:absolute after:left-1 after:bottom-0
   after:h-px after:w-[80%]
   after:transition-transform after:origin-left
   ${
     pathName.startsWith(href)
       ? "after:scale-x-100 after:bg-brand"
       : "after:scale-x-0 after:bg-brand hover:after:scale-x-100"
   }`;

  return (
    <>
      {!isHomePage && <Newsletter />}
      <footer className="text-brand md:text-center md:grid">
        <div className="text-white text-sz-48 tracking-wide uppercase leading-17.5 mb-4 md:mb-20.75 md:col-start-2 col-span-2">
          SpryOne
        </div>
        <nav className="md:col-start-2 col-span-2">
          <ul className="text-sz-16 mb-6 md:mb-0 space-y-2 md:space-y-0 md:flex md:justify-center md:gap-sz-60">
            <li>
              <Link href="/" className={linkClasses("/")}>Home</Link>
            </li>
            <li>
              <Link href="/services" className={linkClasses("/services")}>Services</Link>
            </li>
            <li>
              <Link href="/projects" className={linkClasses("/projects")}>Projects</Link>
            </li>
            <li>
              <Link href="/about" className={linkClasses("/about")}>About Us</Link>
            </li>
            <li>
              <Link href="/contact" className={linkClasses("/contact")}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="text-sz-16 md:text-sz-20 mb-2 md:mb-0 md:col-start-1 md:row-start-2">
          <Link href="">Terms & Conditions</Link>
        </div>
        <div className="text-sz-16 md:text-sz-20 md:col-start-4 md:row-start-2">
          <Link href="">Privacy Policy</Link>
        </div>
      </footer>
    </>
  )
}