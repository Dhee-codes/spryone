import Link from "next/link";
import { ArrowIcon } from "./ui/ArrowIcon";

const services = [
  {
    id: "01",
    title: "Content Creation",
    tags: "TV Ads | Digital Campaigns | Animation",
    desc: "From concept to post-production, we craft stories that captivate audiences and move markets.",
    href: "",
  },
  {
    id: "02",
    title: "Media Management",
    tags: "Social Strategy | SEO | Paid Advertising",
    desc: "We amplify your brand's voice with data-driven campaigns that deliver measurable results.",
    href: "",
  },
  {
    id: "03",
    title: "Brand Storytelling",
    tags: "Motion Graphics | Visual Identity",
    desc: "Distinctive creative that makes your brand impossible to ignore.",
    href: "",
  },
  {
    id: "04",
    title: "App Development",
    tags: "iOS | Android | Web Apps",
    desc: "User-centric digital experiences engineered for engagement and growth.",
    href: "",
  },
];

export const ServiceList = () => {
  return (
    <section className="flex flex-col font-grotesk border-y border-feint">
        {services.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group flex flex-col md:flex-row items-start md:items-center text-foreground/40 py-10 border-b border-feint cursor-pointer"
          >
            <span className="md:w-1/8 text-sz-40 group-hover:text-foreground">
              {item.id}
            </span>

            <div className="flex-1 flex gap-4 md:gap-6">
              <h2 className="text-sz-48 md:text-sz-64 group-hover:text-foreground">
                {item.title}
              </h2>
              <ArrowIcon className="w-6 md:w-11 text-foreground hidden group-hover:block" />
            </div>

            <div className="md:w-1/3 mt-4 md:mt-0">
              <p className="text-sz-16 font-bold group-hover:text-foreground uppercase mb-2 md:mb-4">
                {item.tags}
              </p>
              <p className="text-sz-16 font-nuni group-hover:text-foreground">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
};
