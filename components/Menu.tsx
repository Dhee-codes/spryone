import Link from "next/link";

type MenuProps = {
  menuOpen: boolean;
  closeMenu: () => void;
};


export const Menu = ({ closeMenu, menuOpen }: MenuProps) => {
  return (
    <section className={`fixed inset-0 z-50 transition-all duration-600 ease-in-out ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
      <button
        className="absolute top-layout-y right-layout-x z-50"
        onClick={closeMenu}
        >
        <svg
          className="w-8.5 h-8.5 stroke-background md:stroke-brand"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M32.5268 0.887227L0.707031 32.707" strokeWidth="2"/>
          <path d="M32.5268 32.5268L0.707031 0.707031" strokeWidth="2"/>
        </svg>
      </button>
      <section className="h-full grid grid-cols-1 md:grid-cols-[3fr_2fr]">
        <section className="relative text-black bg-brand px-15 py-10">
          <nav className="mt-menu-y">
            <ul className="text-sz-64 font-medium leading-none tracking-wide space-y-5">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/proojects">Projecs</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
            </ul>
          </nav>

          <ul className="absolute bottom-layout-y flex gap-sz-28 text-sz-20 leading-nm tracking-wide">
            <li>
              <Link href="">LinkedIn</Link>
            </li>
            <li>
              <Link href="">Instagram</Link>
            </li>
            <li>
              <Link href="">X (formerly Twitter)</Link>
            </li>
          </ul>
        </section>

        <section className="relative flex items-center text-brand bg-black px-15 py-10">
          <div>
            <h2 className="text-sz-20 tracking-wide leading-none">Got an Idea?</h2>
            <p className="text-sz-48 leading-none mt-[clamp(0.25rem,1.5vw,1rem)] mb-[clamp(1.25rem,3.8vw,4rem)]">Let&apos;s craft brilliant together!</p>
            <button className="text-sz-24 tracking-wide border rounded-4xl px-[clamp(1rem,2.22vw,3rem)] py-[clamp(0.25rem,0.56vw,1rem)]">
              Get In touch
            </button>
          </div>

          <ul className="absolute bottom-layout-y flex gap-sz-28 text-sz-20 leading-nm tracking-wide">
            <li>
              <Link href="">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="">Privacy Policy</Link>
            </li>
          </ul>
        </section>
      </section>
    </section>
  )
}
