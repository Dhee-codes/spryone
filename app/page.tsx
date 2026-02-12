import { Hero } from "@/components/Hero";
import { Feature } from "@/components/Feature";
import { OurServices } from "@/components/OurServices";
import { BestProjects } from "@/components/BestProjects";
import { ConnectCta } from "@/components/ConnectCta";

export default function Home() {
  return (
    <section>
      <Hero />
      <Feature />
      <OurServices />
      <BestProjects />
      <ConnectCta />
    </section>
  );
}
