// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import Providers from '@/components/layouts/Providers';
import '@/styles/globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
