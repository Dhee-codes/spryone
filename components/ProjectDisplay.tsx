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
];

export const ProjectDisplay = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-15">
      {projects.map((project) => (
        <Link
          key={project.title}
          href={project.href}
          className="bg-card hover:text-white group"
          >
          <div className="rounded-2xl md:rounded-[20px] mb-4 md:mb-6.25 overflow-hidden">
            <Image
              src={project.src}
              alt={project.title}
              width={630}
              height={440}
              className="aspect-630/440 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <div className="flex justify-between items-baseline">
            <h3 className="text-sz-24 leading-none md:leading-normal lg:leading-7 font-grotesk">{project.title}</h3>
            <ArrowIcon className="w-8 md:w-10 lg:w-12" />
          </div>
        </Link>
      ))}
    </section>
  )
}
