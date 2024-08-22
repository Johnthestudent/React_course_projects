import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//for the Navbar
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/Container';

//provide togglable mode
import Providers from './providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store imitating project in Next.js",
  description: "A nifty store built in Next.js",
};

import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <ClerkProvider>
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Container className='py-20'>{children}</Container>
        </Providers>
      </body>
    </html>
  </ClerkProvider>
);
}
