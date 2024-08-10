'use client';

import * as React from 'react';

import { cn } from '@/lib/cn';
import { NAVIGATIONS } from '@/lib/constants';

import { LucideIcons } from '../icons/lucide-icons';
import Logo from '../logo';
import { NavigationItem } from './navigation-item';

export default function MobileHeader() {
  const [toggle, setToggle] = React.useState<boolean>(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="container relative flex items-center justify-between">
      <Logo className="my-4" isMobile />
      <div className="my-4 rounded-full border-2 border-subtle p-2 text-subtle">
        <LucideIcons.MobileMenu onClick={handleToggle} />
      </div>
      {toggle ? (
        <React.Fragment>
          <div className="fixed right-0 top-0 h-screen w-full bg-neutral-900/50">
            <nav className="absolute right-0 z-10 flex h-full w-[18em] min-w-[5em] flex-col justify-around bg">
              <div className="mr-3 self-end rounded-full border-2 border-subtle p-2 text-subtle">
                <LucideIcons.CloseIcon onClick={handleToggle} />
              </div>
              <ul className="flex flex-col justify-center gap-10 p-4 text-right text-subtle">
                {NAVIGATIONS.map((nav) => (
                  <li key={nav.name}>
                    <NavigationItem item={nav} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </React.Fragment>
      ) : null}
    </header>
  );
}
