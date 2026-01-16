"use client";

import { Switch } from "@/components/ui/switch";
import { useViewMode } from "@/context/ViewModeContext";

export default function ViewToggle() {
  const { viewMode, setViewMode } = useViewMode();

  return (
    <div className="flex items-center gap-2 text-sm">
      <span>Engineer</span>
      <Switch
        checked={viewMode === "pm"}
        onCheckedChange={(v) => setViewMode(v ? "pm" : "engineer")}
      />
      <span>PM</span>
    </div>
  );
}
