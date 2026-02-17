import { Heading } from "@/components/Heading";
import { ServicesGrid } from "@/components/ServicesGrid";

export default function Services() {
  return (
    <section>
      <Heading
        head="Our Services"
        main="Services We Offer"
        desc="Learn more about the services and the team behind it."
      />
      <ServicesGrid />
    </section>
  )
}