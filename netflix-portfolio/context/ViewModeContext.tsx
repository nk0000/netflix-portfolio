"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ViewMode = "engineer" | "pm";

const ViewModeContext = createContext<{
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
} | null>(null);

const STORAGE_KEY = "portfolio-view-mode";

export function ViewModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [viewMode, setViewMode] = useState<ViewMode>("engineer");

  // Load saved mode on first render
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ViewMode | null;
    if (saved === "engineer" || saved === "pm") {
      setViewMode(saved);
    }
  }, []);

  // Persist mode on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, viewMode);
  }, [viewMode]);

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used inside ViewModeProvider");
  }
  return context;
}
