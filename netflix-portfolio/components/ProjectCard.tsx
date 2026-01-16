"use client";

import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }: any) {
  return (
    <ProjectModal project={project}>
      <motion.div
        whileHover={{
          scale: 1.12,
          zIndex: 20,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="
          relative
          min-w-[260px]
          h-[150px]
          rounded-xl
          bg-zinc-800
          cursor-pointer
          overflow-hidden
          shadow-md
          hover:shadow-2xl
        "
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 p-4 h-full flex flex-col justify-end">
          <motion.h3
            className="font-semibold text-white text-[15px] leading-snug"
            initial={{ y: 8, opacity: 0.9 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-sm text-zinc-400 mt-1 leading-snug"
            initial={{ y: 12, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {project.preview}
          </motion.p>
        </div>
      </motion.div>
    </ProjectModal>
  );
}
