import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Footer/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Rev. Fr. Stanley Ukasoanya Foundation',
  description: 'Promoting Priestly formations and family life.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Analytics />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
