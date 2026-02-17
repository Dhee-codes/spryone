"use client";
import { Heading } from "@/components/Heading";
import { useState } from "react";
import { ProjectDisplay } from "@/components/ProjectDisplay";
import { Pagination } from "@/components/Pagination";

export default function Projects() {
  const [activePage, setActivePage] = useState(1);
  const total = 10;

  return (
    <section>
      <Heading
        head="Our Work"
        main="Our Projects"
        desc="Learn more about the projects and the team behind it."
      />
      <ProjectDisplay />
      <Pagination 
        currentPage={activePage} 
        totalPages={total} 
        onPageChange={(page) => setActivePage(page)}
      />
    </section>
  )
}