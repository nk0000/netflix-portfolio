"use client";

import Row from "@/components/Row";
import ProjectCard from "@/components/ProjectCard";
import ViewToggle from "@/components/ViewToggle";
import { sections } from "@/data/projects";
import { useViewMode } from "@/context/ViewModeContext";

export default function Home() {
  const { viewMode } = useViewMode();

  return (
    <main className="px-12 py-10 max-w-[1600px] mx-auto">
      {/* Toggle */}
      <div className="flex justify-end mb-10">
        <ViewToggle />
      </div>

      {/* Netflix-style rows */}
      {sections.map((section) => (
        <Row key={section.id} title={section.title}>
          {section.items.map((item, idx) => {
            const v = item[viewMode];
            return (
              <ProjectCard
                key={idx}
                project={{ ...item, title: v.title, preview: v.preview }}
              />
            );
          })}
        </Row>
      ))}
    </main>
  );
}
