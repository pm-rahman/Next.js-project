import Footer from '@/Component/Footer'
import classNames from '@/utils/classNames'
import './globals.css'
import { Roboto } from "next/font/google";

import "./globals.css";
import Navbar from '@/Component/NavBar';
import Providers from '@/providers';
import Toaster from '@/Component/Toaster';

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Easy Shop",
  description: "Easy Shop is an e-commerce web application",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="transition-all">
      <body
        className={classNames(
          roboto.variable,
          "container mx-auto px-2 font-roboto"
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col justify-between">
            <div>
              <Navbar />
              <main className="mt-5">{children}</main>
            </div>
            <Footer />
          </div>
        </Providers>
        <Toaster/>
      </body>
    </html>
  )
}
