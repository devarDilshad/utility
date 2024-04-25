import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "YouTility";
const desc =
  "Explore our suite of handy online tools including discount calculator, password generator, age calculator, and more. Simplify your tasks effortlessly!";

export const metadata = {
  applicationName: title,
  title: {
    default: title,
    template: title,
  },
  description: desc,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: title,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: title,
    title: {
      default: title,
      template: title,
    },
    description: desc,
  },
  twitter: {
    card: "summary",
    title: {
      default: title,
      template: title,
    },
    description: desc,
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
