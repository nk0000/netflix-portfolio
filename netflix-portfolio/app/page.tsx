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

      {/* Context-aware header */}
      <div className="mb-12 max-w-3xl">
        {viewMode === "engineer" ? (
          <>
            <h1 className="text-3xl font-semibold tracking-tight">
              Software Engineer with deep systems experience
            </h1>
            <p className="mt-3 text-zinc-400 text-base leading-relaxed">
              Building complex, performance-critical engineering systems with
              a strong focus on correctness, scalability, and domain depth.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-semibold tracking-tight">
              Engineer transitioning into Product Management
            </h1>
            <p className="mt-3 text-zinc-400 text-base leading-relaxed">
              Applying strong technical foundations to product discovery,
              decision-making, and delivering outcomes aligned with users
              and business goals.
            </p>
          </>
        )}
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
