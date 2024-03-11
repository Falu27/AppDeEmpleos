import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import NextAuthSessionProvider from "./provider";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "MyEmpleo App",
  description: "Busca o presta servicios.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
        <div className="mx-6 md:mx-16">
          <Header />
          {children}
        </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}