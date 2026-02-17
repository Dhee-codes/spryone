import { SectionHeader } from "./SecionHeader";
import { ServiceList } from "./ServiceList";

export const OurServices = () => {
  return (
    <section className="grid font-grotesk my-16 md:mt-24 lg:mt-45">
      <div className="mb-12 md:mb-18">
        <SectionHeader title="Our Services" />
        <p className="text-sz-16 leading-none tracking-wide text-foreground/50 mt-2 lg:mt-6">Where Creativity Meets Cutting-Edge Technology</p>
      </div>
      <ServiceList />
    </section>
  )
}
