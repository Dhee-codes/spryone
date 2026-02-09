import Link from "next/link";

type MenuProps = {
  closeMenu: () => void;
};


export const Menu = ({ closeMenu }: MenuProps) => {
  return (
    <section className="absolute inset-0 z-50">
      <button
        className="absolute top-10 right-15 z-50"
        onClick={closeMenu}
        >
        <svg
          className="w-8.5 h-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M32.5268 0.887227L0.707031 32.707" stroke="#D5FF3F" strokeWidth="2"/>
          <path d="M32.5268 32.5268L0.707031 0.707031" stroke="#D5FF3F" strokeWidth="2"/>
        </svg>
      </button>
      <section className="h-full grid grid-cols-1 md:grid-cols-[3fr_2fr]">
        <section className="relative text-black bg-[#d5ff3f] px-15 py-10">
          <nav className="mt-32">
            <ul className="text-nav font-medium leading-none tracking-wide space-y-5">
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

          <ul className="absolute bottom-10 flex gap-7 text-xl tracking-wide">
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

        <section className="relative flex items-center text-[#d5ff3f] bg-black px-15 py-10">
          <div>
            <h2 className="text-xl tracking-wide leading-none">Got an Idea?</h2>
            <p className="text-5xl leading-none mt-3.75 mb-12.5">Let&apos;s craft brilliant together!</p>
            <button className="text-2xl tracking-wide border rounded-4xl px-8 py-2">
              Get In touch
            </button>
          </div>

          <ul className="absolute bottom-10 flex gap-7 text-xl tracking-wide">
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
