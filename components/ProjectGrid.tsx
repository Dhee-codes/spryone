import Image from "next/image";
import { ArrowIcon } from "./ui/ArrowIcon";

const projects = [
  {
    title: "Green House Gardening",
    src: "/home-decor/secondary/project1.png",
  },
  {
    title: "Future Construction",
    src: "/home-decor/secondary/project2.png",
  },
  {
    title: "Global.io",
    src: "/home-decor/secondary/project3.png",
  },
  {
    title: "Modern Dashboard",
    src: "/home-decor/secondary/project4.png",
  },
  {
    title: "Lifestyle",
    src: "/home-decor/secondary/project5.png",
  },
];

export const ProjectGrid = () => {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative max-w-160 overflow-hidden rounded-[20px] bg-card group cursor-pointer"
        >
          <Image
            src={project.src}
            alt={project.title}
            width={635}
            height={450}
            className="max-w-160 max-sm:aspect-5/2 aspect-5/3 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}

      <div className="relative flex flex-col justify-start p-10 bg-card rounded-[20px] max-w-160 max-sm:aspect-5/4 md:min-h-75 group cursor-pointer">
        <h2 className="text-sz-48 md:text-sz-64 leading-none tracking-wide transition-transform duration-300 group-hover:scale-105">
          Explore More <br /> Success Stories
        </h2>
        <ArrowIcon className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-8 md:w-15 transition-transform duration-300 group-hover:scale-105" />
      </div>
    </section>
  );
};
