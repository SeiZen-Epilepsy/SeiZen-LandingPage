import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SeiZen - Continuous Epilepsy Monitoring Solution",
  description:
    "Advanced, non-invasive monitoring solution that provides real-time seizure detection and alerts for people living with epilepsy.",
  icons: {
    icon: "/SeiZen-Logo-Icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased suppressHydrationWarning`}
      >
        {children}
      </body>
    </html>
  );
}
