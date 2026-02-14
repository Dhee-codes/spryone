import Image from "next/image";
import { Logos } from "@/components/Logos";

const stats = [
    {
        id: "01",
        metric: "400+",
        impact: "Brand Transformed",
    },
    {
        id: "02",
        metric: "100%",
        impact: "Average Campaign ROI",
    },
    {
        id: "03",
        metric: "100%", 
        impact: "Client Retention Rate",
    },
]

export default function About() {
  return (
    <section className="font-grotesk">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-15.5 mb-9 md:mb-18">
        <div className="relative overflow-hidden h:autto max-sm:h-[35vh]">
          <Image
            className="object-cover max-sm:object-center"
            src="/about/decor-img.jpg"
            alt="Decorative image"
            fill
          />
        </div>
        <div className="md:p-4 lg:p-8.5">
          <p className="text-sz-16 leading-6 font-semibold text-brand font-nuni">We&apos;ve helped hundreds of companies</p>
          <p className="text-sz-48 tracking-tight md:leading-15 max-w-[20ch] mb-8 md:mb-16">We&apos;re only just getting started on our journey</p>

          <div className="grid grid-cols-2 gap-6 md:gap-12">
            {stats.map((stat) => (
                <div key={stat.id}>
                    <p className="text-sz-60 text-brand ">{stat.metric}</p>
                    <p className="font-nuni max-sm:max-w-[15ch]">{stat.impact}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
      <div>
          <p className="text-sz-16 leading-6 font-semibold text-brand font-nuni text-center mb-4 md:mb-8">
              From startups to the world&apos;s largest companies 
          </p>
          <Logos />
      </div>
    </section>
  );
}
