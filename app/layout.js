import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adapt and Go Therapy",
  description:
    "Adapt and Go Therapy is a home health therapy company based in Houston, Texas. We provide home occupational therapy and physical therapy services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>{children}</body>
    </html>
  );
}
