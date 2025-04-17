import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { PostHogProvider } from "@/components/posthog-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instant QR Code Generator - qrcode.erkan.dev",
  description:
    "Generate high-quality QR codes instantly. Free, fast, no watermark. Create QR codes for URLs, text, WiFi and more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-muted")}>
        <PostHogProvider>
          <main className="flex flex-col items-center justify-center py-12 px-4">
            {children}
          </main>
          <footer className="text-center text-xs text-muted-foreground py-8">
            Built with ❤️ by erkan.dev
          </footer>
        </PostHogProvider>
      </body>
    </html>
  );
}
