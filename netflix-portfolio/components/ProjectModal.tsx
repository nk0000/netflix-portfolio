"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { useViewMode } from "@/context/ViewModeContext";

export default function ProjectModal({ project, children }: any) {
  const [open, setOpen] = useState(false);
  const { viewMode } = useViewMode();

  const data = project[viewMode];

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl bg-black text-white">
          <h2 className="text-2xl font-bold">{data.title}</h2>

          {data.sections.map((s: any) => (
            <div key={s.heading} className="mt-4">
              <h3 className="font-semibold">{s.heading}</h3>
              <p className="opacity-80 text-sm">{s.text}</p>
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
}
