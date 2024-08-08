'use client';

import * as React from 'react';

export type NavigationItem = {
  name: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  target?: HTMLAnchorElement['target'];
  isCurrent: ({
    item,
    pathname,
  }: {
    item: Pick<NavigationItem, 'href'>;
    pathname: string | null;
  }) => boolean;
};

export const NAVIGATIONS = [
  {
    name: 'homepage',
    href: '/',
    isCurrent: ({ pathname }) => pathname?.startsWith('/') ?? false,
  },
  {
    name: 'customize-your-trip',
    href: '/customize-your-trip',
    isCurrent: ({ pathname }) =>
      pathname?.startsWith('/customize-your-trip') ?? false,
  },
  {
    name: 'destination',
    href: '/destination',
    isCurrent: ({ pathname }) => pathname?.startsWith('/destination') ?? false,
  },
  {
    name: 'article',
    href: '/article',
    isCurrent: ({ pathname }) => pathname?.startsWith('/article') ?? false,
  },
  {
    name: 'need-asistance',
    href: '/need-asistance',
    isCurrent: ({ pathname }) =>
      pathname?.startsWith('/need-asistance') ?? false,
  },
] satisfies NavigationItem[];
