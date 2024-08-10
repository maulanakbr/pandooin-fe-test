'use client';

import * as React from 'react';

import { NAVIGATIONS } from '@/lib/constants';

import Logo from '../logo';
import { NavigationItem } from './navigation-item';

export default function DesktopHeader() {
  return (
    <header className="fixed flex w-full max-w-full items-center justify-between px-[8em]">
      <Logo className="my-4" />
      <nav>
        <ul className="flex items-center justify-center gap-14 text-right text-foreground">
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
