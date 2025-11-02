import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Logo } from "@/components/Logo";
import { ConnectWalletTopRight } from "@/components/ConnectWalletTopRight";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "ExamVault - Guardian Answer Chest",
  description: "Privacy-preserving exam answer submission system using FHE",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-background text-foreground antialiased`}>
        <Providers>
          <header className="relative z-10 border-b border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Logo />
              <ConnectWalletTopRight />
            </div>
          </header>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
