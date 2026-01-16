import "./globals.css";
import { ViewModeProvider } from "@/context/ViewModeContext";

export const metadata = {
  title: "Portfolio",
  description: "Netflix-style Engineer & PM Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white overflow-x-hidden bg-black">
        {/* ViewModeProvider MUST wrap children */}
        <ViewModeProvider>
          {/* Full-width Netflix background */}
          <div className="min-h-screen bg-gradient-to-b from-[#141414] via-[#141414] to-black">
            {children}
          </div>
        </ViewModeProvider>
      </body>
    </html>
  );
}
