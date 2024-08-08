'use client';

import * as React from 'react';

import { NAVIGATIONS } from '@/lib/constants';

import Logo from '../logo';
import { NavigationItem } from './navigation-item';

export default function DesktopHeader() {
  return (
    <header className="flex items-center justify-between px-[8em]">
      <Logo className="my-4" isMobile />
      <nav>
        <ul className="flex justify-center gap-14 text-right text-subtle">
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
