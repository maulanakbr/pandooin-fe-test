'use client';

import * as React from 'react';

import { cn } from '@/lib/cn';
import { NAVIGATIONS } from '@/lib/constants';

import LazyIcon from '../icons/lazy-icon';
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
        <LazyIcon name="mobile-menu" size={26} onClick={handleToggle} />
      </div>
      {toggle ? (
        <React.Fragment>
          <div className="fixed top-0 right-0 w-full h-screen bg-neutral-900/50">
            <nav className="absolute flex flex-col justify-around right-0 z-10 w-[18em] min-w-[5em] h-full bg-foreground">
              <div className="rounded-full border-2 border-subtle p-2 text-subtle self-end mr-3">
                <LazyIcon name="x" size={26} onClick={handleToggle} />
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
