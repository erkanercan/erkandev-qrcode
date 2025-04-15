"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QrPreviewProps {
  text: string;
  size: number;
  fgColor: string;
  bgColor: string;
}

export function QrPreview({ text, size, fgColor, bgColor }: QrPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !text) return;

    QRCode.toCanvas(canvasRef.current, text, {
      width: size,
      margin: 2,
      color: {
        dark: fgColor,
        light: bgColor,
      },
      errorCorrectionLevel: "M", // smaller than H
    });
  }, [text, size, fgColor, bgColor]);

  return (
    <div className="flex justify-center">
      <canvas
        ref={canvasRef}
        className="border rounded-lg max-w-[288px] max-h-[288px] min-w-[288px] min-h-[288px]"
      />
    </div>
  );
}
