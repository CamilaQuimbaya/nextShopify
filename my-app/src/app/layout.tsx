

import { Inter } from "next/font/google";
import { Fredoka } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import 'app/sass/globals.sass';

const inter = Inter({ subsets: ["latin"] });

const fredoka = Fredoka({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
