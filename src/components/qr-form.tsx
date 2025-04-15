"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { buildQrContent, QrType } from "@/lib/qr-formats";

interface QrFormProps {
  onChange: (text: string) => void;
  onColorChange: (fg: string, bg: string) => void;
  onSizeChange: (size: number) => void;
}

export function QrForm({ onChange, onColorChange, onSizeChange }: QrFormProps) {
  const [type, setType] = useState<QrType>("url");
  const [data, setData] = useState<Record<string, string>>({});
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(256);

  const handleInput = (key: string, value: string) => {
    const next = { ...data, [key]: value };
    setData(next);
    onChange(buildQrContent({ type, data: next }));
  };

  const handleTypeChange = (newType: QrType) => {
    setType(newType);
    setData({});
    onChange("");
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="pb-2">QR Type</Label>
        <Select value={type} onValueChange={handleTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="url">URL</SelectItem>
            <SelectItem value="text">Text</SelectItem>
            <SelectItem value="wifi">WiFi Network</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
            <SelectItem value="sms">SMS</SelectItem>
            <SelectItem value="vcard">Contact Card</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {renderInputs(type, handleInput)}

      <div className="flex items-center gap-4">
        <Label>Foreground</Label>
        <Input
          type="color"
          value={fgColor}
          onChange={(e) => {
            setFgColor(e.target.value);
            onColorChange(e.target.value, bgColor);
          }}
          className="h-10 w-16 p-1"
        />

        <Label>Background</Label>
        <Input
          type="color"
          value={bgColor}
          onChange={(e) => {
            setBgColor(e.target.value);
            onColorChange(fgColor, e.target.value);
          }}
          className="h-10 w-16 p-1"
        />
      </div>

      <div>
        <Label className="pb-2">Size ({size}px)</Label>
        <Slider
          defaultValue={[size]}
          min={128}
          max={1024}
          step={32}
          onValueChange={([val]) => {
            setSize(val);
            onSizeChange(val);
          }}
        />
      </div>
    </div>
  );
}

function renderInputs(
  type: QrType,
  handleInput: (key: string, value: string) => void
) {
  const map: Record<QrType, { label: string; key: string }[]> = {
    url: [{ label: "URL", key: "url" }],
    text: [{ label: "Text", key: "text" }],
    wifi: [
      { label: "SSID", key: "ssid" },
      { label: "Password", key: "password" },
      { label: "Security (WPA/WPA2/None)", key: "security" },
    ],
    email: [
      { label: "Email", key: "email" },
      { label: "Subject", key: "subject" },
      { label: "Body", key: "body" },
    ],
    phone: [{ label: "Phone", key: "phone" }],
    sms: [
      { label: "Phone", key: "phone" },
      { label: "Body", key: "body" },
    ],
    vcard: [
      { label: "Name", key: "name" },
      { label: "Phone", key: "phone" },
      { label: "Email", key: "email" },
      { label: "Company", key: "company" },
    ],
  };

  return map[type]?.map((field) => (
    <div key={field.key}>
      <Label className="pb-2">{field.label}</Label>
      <Input
        placeholder={field.label}
        onChange={(e) => handleInput(field.key, e.target.value)}
      />
    </div>
  ));
}
