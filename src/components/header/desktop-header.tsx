'use client';

import * as React from 'react';

import { cn } from '@/lib/cn';
import { NAVIGATIONS } from '@/lib/constants';
import { useScroll } from '@/hooks/use-scroll';

import Logo from '../logo';
import { NavigationItem } from './navigation-item';

export default function DesktopHeader() {
  const { isScroll } = useScroll();

  return (
    <header
      className={cn(
        !isScroll
          ? 'fixed z-50 flex w-full max-w-full items-center justify-between px-[8em]'
          : 'fixed z-50 flex w-full max-w-full items-center justify-between bg px-[8em] shadow-md'
      )}
    >
      <Logo className="my-4" isMobile={!isScroll ? false : true} />
      <nav>
        <ul
          className={cn(
            !isScroll
              ? 'flex items-center justify-center gap-14 text-right text-foreground'
              : 'flex items-center justify-center gap-14 text-right text-subtle'
          )}
        >
          {NAVIGATIONS.map((nav) => (
            <li key={nav.name}>
              <NavigationItem item={nav} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
