import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-brand">
      <div className="text-white text-sz-48 tracking-wide uppercase leading-17.5">
        SpryOne
      </div>
      <nav>
        <ul className="text-sz-16 mb-6 md:mb-0">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Services</Link>
          </li>
          <li>
            <Link href="">Project</Link>
          </li>
          <li>
            <Link href="">About Us</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="text-sz-20 flex gap-sz-28">
          <li>
            <Link href="">Terms & Conditions</Link>
          </li>
          <li>
            <Link href="">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}