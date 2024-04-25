import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  applicationName: "YouTility",
  title: {
    default: "YouTility",
    template: "YouTility",
  },
  description:
    "Explore our suite of handy online tools including discount calculator, password generator, age calculator, and more. Simplify your tasks effortlessly!",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "YouTility",
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "YouTility",
    title: {
      default: "YouTility",
      template: "YouTility",
    },
    description:
      "Explore our suite of handy online tools including discount calculator, password generator, age calculator, and more. Simplify your tasks effortlessly!",
  },
  twitter: {
    card: "summary",
    title: {
      default: "YouTility",
      template: "YouTility",
    },
    description:
      "Explore our suite of handy online tools including discount calculator, password generator, age calculator, and more. Simplify your tasks effortlessly!",
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
