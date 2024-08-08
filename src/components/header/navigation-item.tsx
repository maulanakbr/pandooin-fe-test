'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/cn';
import type { NavigationItem } from '@/lib/constants';
import { getItemName } from '@/lib/get-item-name';
import { titleCase } from '@/lib/title-case';

type NavigationItemProps = {
  index?: number;
  item: NavigationItem;
};

const defaultIsCurrent: NavigationItem['isCurrent'] = ({ item, pathname }) => {
  return item.href ? (pathname?.startsWith(item.href) ?? false) : false;
};

export function NavigationItem({ index, item }: NavigationItemProps) {
  const pathname = usePathname();
  const isCurrent: NavigationItem['isCurrent'] =
    item.isCurrent || defaultIsCurrent;
  const current = isCurrent({ item, pathname });

  return (
    <React.Fragment>
      <Link
        href={item.href}
        aria-current={current ? 'page' : undefined}
        className={cn(
          '[&[aria-current="page"]]:border-b-2 [&[aria-current="page"]]:border-default'
        )}
      >
        {titleCase(getItemName(item.name))}
      </Link>
    </React.Fragment>
  );
}
