import { SectionHeader } from "./SecionHeader";
import { ProjectGrid } from "./ProjectGrid";

export const BestProjects = () => {
  return (
    <section className="grid gap-16 md:gap-32">
      <SectionHeader title="Best Projects" />
      <ProjectGrid />
    </section>
  )
}
