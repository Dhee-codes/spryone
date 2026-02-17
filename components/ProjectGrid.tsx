import { ArrowIcon } from "./ui/ArrowIcon";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Green House Gardening Landing Page",
    src: "/home/secondary/project1.png",
    href: "",
  },
  {
    title: "Future Construction Landing Page",
    src: "/home/secondary/project2.png",
    href: "",
  },
  {
    title: "Logistics Dashboard",
    src: "/home/secondary/project3.png",
    href: "",
  },
  {
    title: "Spotify Spatial Design",
    src: "/home/secondary/project4.png",
    href: "",
  },
  {
    title: "Lifestyle Landing Page",
    src: "/home/secondary/project5.png",
    href: "",
  },
];

export const ProjectGrid = () => {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Link
          key={index}
          href={project.href}
          className="relative max-w-160 overflow-hidden rounded-2xl md:rounded-[20px] bg-card group cursor-pointer"
        >
          <Image
            src={project.src}
            alt={project.title}
            width={635}
            height={450}
            className="max-w-160 max-sm:aspect-5/2 aspect-5/3 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      ))}

      <Link href="/projects" className="relative flex flex-col justify-start p-10 bg-card rounded-[20px] max-w-160 max-sm:aspect-5/4 md:min-h-75 group cursor-pointer">
        <h2 className="text-sz-48 md:text-sz-64 leading-none tracking-wide transition-transform duration-300 group-hover:scale-105 group-hover:text-white">
          Explore More <br /> Success Stories
        </h2>
        <ArrowIcon className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-8 md:w-15 transition-transform duration-300 group-hover:scale-105 group-hover:text-white" />
      </Link>
    </section>
  );
};
