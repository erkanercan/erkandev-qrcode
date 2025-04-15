"use client";

import QRCode from "qrcode";
import posthog from "posthog-js";
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  text: string;
  format: "png" | "svg";
}

export function DownloadButton({ text, format }: DownloadButtonProps) {
  const handleDownload = async () => {
    let href = "";

    if (format === "png") {
      const canvas = document.querySelector("canvas");
      if (!canvas) return;
      href = canvas.toDataURL("image/png");
    } else {
      const svg = await QRCode.toString(text, {
        type: "svg",
        margin: 2,
        errorCorrectionLevel: "M",
      });
      href = "data:image/svg+xml;base64," + btoa(svg);
    }

    const link = document.createElement("a");
    link.href = href;
    link.download = `qrcode.${format}`;
    link.click();

    posthog.capture("qr_download", { format });
  };

  return (
    <Button onClick={handleDownload} variant="outline">
      Download {format.toUpperCase()}
    </Button>
  );
}
