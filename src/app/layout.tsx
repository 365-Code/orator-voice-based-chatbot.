import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orator - Voice Based ChatBot",
  description:
    "A voice based chat bot, that listens and answers in audio form only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
