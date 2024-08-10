'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavigationItem } from '@/lib/constants';
import { getItemName } from '@/lib/get-item-name';
import { titleCase } from '@/lib/title-case';

import { Button } from '../ui/button';

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
        className='[&[aria-current="page"]]:border-default md:text-[17px] md:font-bold [&[aria-current="page"]]:border-b-2'
      >
        {!item.action ? (
          titleCase(getItemName(item.name))
        ) : (
          <Button variant="outline-gold">
            {titleCase(getItemName(item.name))}
          </Button>
        )}
      </Link>
    </React.Fragment>
  );
}
