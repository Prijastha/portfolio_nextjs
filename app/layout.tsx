import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','500', '700'],
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Prija's Portfolio",
  description: "Minimalist frontend developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
