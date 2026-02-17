import { ArrowIcon } from "./ui/ArrowIcon";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Research and Strategy",
    description: "We don't guess — we craft data-driven brilliance.",
    detail: "Deep audience insights meet market trends to build unbeatable strategies.",
    href: "",
  },
  {
    id: "02",
    title: "Design & Innovation",
    description: "Where aesthetics meet intelligence.",
    detail: "Pixel-perfect concepts engineered to captivate and convert.",
    href: "",
  },
  {
    id: "03",
    title: "Deliver & Growth",
    description: "Launch is just the beginning.",
    detail: "Flawless execution followed by performance optimization.",
    href: "",
  },
];

export function ServicesGrid() {
  return (
    <section className="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-7.5 font-grotesk">
        {services.map((service) => (
          <Link 
            key={service.id}
            href={service.href}
            className="relative w-64 sm:w-76 lg:w-92 aspect-9/10 bg-card p-5 rounded-[20px] border border-feint drop-shadow hover:inset-ring-2 hover:ring-feint group cursor-pointer flex flex-col justify-end"
          >
            <span className="absolute top-5 left-5 text-feint text-sz-32 leading-none tracking-wide">
              {service.id}
            </span>

            <div className="space-y-4">
              <h2 className="text-sz-48 md:text-sz-55 leading-none tracking-wide max-w-[10ch]">
                {service.title}
              </h2>
              
              <p className="text-sz-16 text-foreground/40 font-nunito max-w-[30ch] mb-4">
                {service.description}
              </p>
              
              <p className="text-sz-16 text-foreground/40 leading-nm tracking-wide font-nunito max-w-[35ch]">
                {service.detail}
              </p>
            </div>
            <ArrowIcon className="absolute top-1/2 translateY-[-50%] right-4 md:right-6 w-6 md:w-11" />
          </Link>
        ))}
    </section>
  );
}