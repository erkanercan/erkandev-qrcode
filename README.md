# qrcode.erkan.dev – Instant QR Code Generator

**Generate high-quality QR codes instantly.**  
Free, fast, no watermark. Built for speed and simplicity.

---

## ✨ Features

- ✅ Generate QR codes for:
  - URLs
  - Text
  - Email
  - WiFi
  - Phone numbers
- 🎨 Customize colors and format (SVG/PNG)
- ⚡ Instantly share or download your QR
- 🧠 Built with [Next.js 15](https://nextjs.org/) & [shadcn/ui](https://ui.shadcn.com/)
- 🛠️ Hosted on [Vercel](https://vercel.com/)
- 📊 Analytics via [PostHog](https://posthog.com/)

---

## 🚀 Live Demo

👉 [https://qrcode.erkan.dev](https://qrcode.erkan.dev)

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS, shadcn/ui
- **QR Generation:** [qrcode](https://www.npmjs.com/package/qrcode) library
- **Animations:** Framer Motion
- **Analytics:** PostHog
- **Hosting:** Vercel

---

## 📁 Setup Instructions

1. **Clone the repo**

   ```bash
   git clone https://github.com/erkanercan/erkandev-qrcode.git
   cd erkandev-qrcode
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or npm install
   ```

3. **Run locally**

   ```bash
   npm dev
   ```

4. **Build**
   ```bash
   npm build && npm start
   ```

---

## 🔐 Environment Variables

> Create a `.env.local` file with your PostHog key:

```env
NEXT_PUBLIC_POSTHOG_KEY=your_public_posthog_key
```

---

## 📈 PostHog Events Tracked

| Event Name         | Description                |
| ------------------ | -------------------------- |
| `qr_generated`     | When a new QR is generated |
| `qr_downloaded`    | When QR is downloaded      |
| `qr_copied`        | When QR data is copied     |
| `qr_theme_changed` | When theme mode is toggled |

---

## 🗀 Favicon & SEO

- Favicon generated using [realfavicongenerator.net](https://realfavicongenerator.net/)
- Metadata managed via `layout.tsx` (`metadata` export)

---

## 💃 Acknowledgements

- [qrcode](https://github.com/soldair/node-qrcode)
- [shadcn/ui](https://ui.shadcn.com)
- [PostHog](https://posthog.com)
- [Framer Motion](https://www.framer.com/motion/)

---

## 💊 License

MIT License.  
Feel free to fork, contribute, or integrate into your own projects!
