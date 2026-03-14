import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bin Omair Design Studio | Interior & Exterior Designs",
  description:
    "Bin Omair Design Studio delivers 3D interior and exterior designs, commercial and residential interiors, fit-out works, turnkey projects, and elevation designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={cn(
          poppins.variable,
          "min-h-screen bg-white text-brand-950 font-sans antialiased selection:bg-brand-500 selection:text-white overflow-x-hidden"
        )}
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
