export type QrType =
  | "url"
  | "text"
  | "wifi"
  | "email"
  | "phone"
  | "sms"
  | "vcard";

export interface QrData {
  type: QrType;
  data: Record<string, string>;
}

export function buildQrContent({ type, data }: QrData): string {
  switch (type) {
    case "url":
      return data.url || "";

    case "text":
      return data.text || "";

    case "wifi":
      return `WIFI:T:${data.security || "WPA"};S:${data.ssid};P:${
        data.password
      };;`;

    case "email":
      return `mailto:${data.email}?${
        data.subject ? `subject=${encodeURIComponent(data.subject)}&` : ""
      }${data.body ? `body=${encodeURIComponent(data.body)}` : ""}`;

    case "phone":
      return `tel:${data.phone}`;

    case "sms":
      return `sms:${data.phone}${
        data.body ? `?body=${encodeURIComponent(data.body)}` : ""
      }`;

    case "vcard":
      return `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
TEL:${data.phone}
EMAIL:${data.email}
ORG:${data.company}
END:VCARD`;

    default:
      return "";
  }
}
