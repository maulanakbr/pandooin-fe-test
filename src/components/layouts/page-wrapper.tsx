'use client';

import * as React from 'react';

import { cn } from '@/lib/cn';
import { useMediaQuery } from '@/hooks/use-media-query';

import Footer from '../footer';
import DesktopHeader from '../header/desktop-header';
import MobileHeader from '../header/mobile-header';

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({
  children,
  className,
  ...props
}: PageWrapperProps) {
  const matches = useMediaQuery('(max-width: 600px)');

  return (
    <div
      className={cn('flex-col-gap-1 flex max-w-full flex-col', className)}
      {...props}
    >
      {matches ? <MobileHeader /> : <DesktopHeader />}
      {children}
      <Footer />
    </div>
  );
}
