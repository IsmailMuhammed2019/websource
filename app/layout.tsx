import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SLinT Innovation Showcase",
  description: "Register free for SLinT's inaugural Monthly Innovation Showcase featuring Signrrett, Aegis360AI, Flot and Sierra Leone's National Cybersecurity Coordinator.",
  openGraph: { title: "SLinT Monthly Innovation Showcase", description: "Sierra Leone's global technology community takes the stage. August 29, 2026 · Registration free.", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "SLinT Monthly Innovation Showcase" }] },
  twitter: { card: "summary_large_image", title: "SLinT Monthly Innovation Showcase", description: "Connect. Showcase. Innovate. Register free at SLinT.org.", images: ["/og.png"] },
  icons: { icon: "/slint-logo.png", shortcut: "/slint-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
