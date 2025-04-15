import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { PostHogProvider } from "@/components/posthog-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR Code Generator — Free, Instant, Downloadable",
  description:
    "Generate your own QR code instantly, for free. Customize color, size, and download as PNG or SVG.",
  openGraph: {
    title: "QR Code Generator",
    description: "Generate your own QR code instantly, for free.",
    type: "website",
    url: "https://qrcode.yourdomain.com",
    images: [
      {
        url: "/og.png", // generate later
        width: 1200,
        height: 630,
        alt: "QR Code Generator",
      },
    ],
  },
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
