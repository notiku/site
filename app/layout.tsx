import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iku — Home",
  description: "I code stuff.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "iku",
    description: "I code stuff.",
    url: "https://iku.pet",
    siteName: "iku",
    images: [
      {
        url: "/img/icon.png",
        width: 512,
        height: 512,
        alt: "iku",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "iku",
    description: "I code stuff.",
    images: ["/img/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=chillax@500&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
