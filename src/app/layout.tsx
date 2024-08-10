import type { Metadata } from 'next';
import { Albert_Sans, Unbounded } from 'next/font/google';
import localFont from 'next/font/local';

import '@/styles/globals.css';

import { cn } from '@/lib/cn';
import { siteConfig } from '@/lib/site-config';
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
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  authors: [
    {
      name: 'Maulana Akbar Yudistika',
    },
  ],
  icons: {
    icon: '/assets/pics/favicon.ico',
    shortcut: '/assets/pics/favicon-16x16.png',
    apple: '/assets/pics/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
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
