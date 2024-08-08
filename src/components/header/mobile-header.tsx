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
    <header
      className={cn(
        !toggle
          ? 'container relative flex items-center justify-between'
          : 'container relative flex h-screen justify-between bg-gray-900/20'
      )}
    >
      <Logo className="my-4" isMobile />
      <div className="my-4 rounded-full border-2 border-subtle p-1 text-subtle">
        <LazyIcon name="mobile-menu" size={38} onClick={handleToggle} />
      </div>
      {toggle ? (
        <React.Fragment>
          <div className="absolute right-4 top-40 z-20 rounded-full border-2 border-subtle p-1 text-subtle">
            <LazyIcon name="x" size={38} onClick={handleToggle} />
          </div>
          <nav className="absolute right-0 z-10 h-screen w-[18em] bg-default">
            <ul className="flex h-full flex-col justify-center gap-4 p-4 text-right text-subtle">
              {NAVIGATIONS.map((nav) => (
                <li>
                  <NavigationItem item={nav} key={nav.name} />
                </li>
              ))}
            </ul>
          </nav>
        </React.Fragment>
      ) : null}
    </header>
  );
}
