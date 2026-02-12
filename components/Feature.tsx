import Image from "next/image";
import { ServicesGrid } from "./ServicesGrid";
import type { Service } from "./ServicesGrid";

const services: Service[] = [
  {
    id: "01",
    title: "Research and Strategy",
    description: "We don't guess — we craft data-driven brilliance.",
    detail: "Deep audience insights meet market trends to build unbeatable strategies.",
  },
  {
    id: "02",
    title: "Design & Innovation",
    description: "Where aesthetics meet intelligence.",
    detail: "Pixel-perfect concepts engineered to captivate and convert.",
  },
  {
    id: "03",
    title: "Deliver & Growth",
    description: "Launch is just the beginning.",
    detail: "Flawless execution followed by performance optimization.",
  },
];

export const Feature = () => {
  return (
    <section className="font-grotesk mt-8 overflow-hidden">
      <div>
        <Image
          className="w-full aspect-2/1 object-cover rounded-2xl md:rounded-4xl"
          src="/home-decor/secondary/decor-img.png"
          alt="Decorative image"
          width={1320}
          height={640}
        />
      </div>
      <div className="flex flex-nowrap gap-16 sm:gap-32 md:gap-48 text-sz-24 sm:text-sz-48 md:text-sz-64 leading-none tracking-wide uppercase text-brand whitespace-nowrap mt-4 sm:mt-8 md:mt-16 mb-8 sm:mb-16 md:mb-32">
        <span>Discuss your ideas</span> <span>collaborate with us</span>
      </div>
      <p className="text-sz-20 md:text-sz-40 leading-nm tracking-wide mb-3.75 sm:mb-7.5 md:mb-15">
        Let&apos;s transform your ideas into cultural impact. Whether it&apos;s
        groundbreaking ads, digital campaigns, or innovative apps, our team
        brings 35+ years of expertise to make it happen.
      </p>
      <div className="flex justify-between text-sz-16">
        <div className="">
          <p>&copy;2025</p>
          <p>All Rights Reserved SpryOne Studio</p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-18 mb-11 sm:mb-22 md:mb-44">
          <div>
            <p>Based On</p>
            <p>Nigeria</p>
          </div>
          <div>
            <p>From</p>
            <p>
              <time dateTime="2013">2013</time>
            </p>
          </div>
        </div>
      </div>

      <ServicesGrid services={services} />
    </section>
  );
};
