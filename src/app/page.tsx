"use client";

import { useState } from "react";
import { QrPreview } from "@/components/qr-preview";
import { DownloadButton } from "@/components/download-button";
import { QrForm } from "@/components/qr-form";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const [text, setText] = useState("https://yourdomain.com");
  const [size, setSize] = useState(288);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");

  return (
    <div className="w-full max-w-3xl space-y-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold">QR Code Generator</h1>
        <p className="text-muted-foreground">Free, instant & customizable</p>
      </header>

      <Card className="p-6 max-w-3xl h-full">
        <CardContent className="flex flex-col items-center justify-between mb-4 md:flex-row gap-8">
          <QrForm
            onChange={setText}
            onColorChange={(fg, bg) => {
              setFgColor(fg);
              setBgColor(bg);
            }}
            onSizeChange={setSize}
          />
          <div className="flex flex-col items-center gap-4">
            <QrPreview
              text={text}
              size={size}
              fgColor={fgColor}
              bgColor={bgColor}
            />

            <div className="flex justify-center gap-4">
              <DownloadButton text={text} format="png" />
              <DownloadButton text={text} format="svg" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
