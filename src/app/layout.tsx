import type { Metadata } from 'next';
import { Albert_Sans, Unbounded } from 'next/font/google';
import localFont from 'next/font/local';

import '@/styles/globals.css';

import { cn } from '@/lib/cn';
import AppProvider from '@/components/app-provider';

const fontBody = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  preload: true,
  display: 'swap',
});

const fontHeading = Unbounded({
  subsets: ['latin'],
  variable: '--font-heading',
  preload: true,
  display: 'swap',
});

const fontAccent = localFont({
  src: '../../public/assets/fonts/Thesignature.ttf',
  variable: '--font-accent',
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <AppProvider>
        <body
          className={cn(
            'min-h-screen bg font-body',
            fontBody.variable,
            fontHeading.variable,
            fontAccent.variable
          )}
        >
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
