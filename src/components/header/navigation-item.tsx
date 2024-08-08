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
        className='md:text-[17px] md:font-bold [&[aria-current="page"]]:border-b-2 [&[aria-current="page"]]:border-default'
      >
        {!item.isHasBorder ? (
          titleCase(getItemName(item.name))
        ) : (
          <span className="border-2 text-emphasis rounded-full py-3 px-6 md:p-3 font-semibold border-emphasis hover:bg-emphasis hover:text-foreground">
            {titleCase(getItemName(item.name))}
          </span>
        )}
      </Link>
    </React.Fragment>
  );
}
