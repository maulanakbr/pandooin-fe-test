'use client';

import * as React from 'react';

type BaseAction = {
  text: string;
  pathname: string;
};

type AbstractContent = {
  headline: string;
  subHeadline?: string;
  description?: string;
  asset?: string;
  action?: Partial<BaseAction>;
  childs?: {
    name: string;
    description: string;
    action?: Partial<BaseAction>;
  }[];
};

export type NavigationItem = {
  name: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  target?: HTMLAnchorElement['target'];
  action?: boolean;
  isCurrent: ({
    item,
    pathname,
  }: {
    item: Pick<NavigationItem, 'href'>;
    pathname: string | null;
  }) => boolean;
};

export type Hero = typeof HERO;
export type Features = typeof FEATURES;
export type Cta = typeof CTA;

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
    name: 'need-assistance?',
    href: '/need-assistance',
    action: true,
    isCurrent: ({ pathname }) =>
      pathname?.startsWith('/need-asistance') ?? false,
  },
] satisfies NavigationItem[];

export const HERO = {
  headline: 'premium travel',
  subHeadline: 'beyond expectation',
  description:
    'experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way',
  action: {
    text: 'take me there',
  },
} satisfies AbstractContent;

export const FEATURES = {
  headline: 'beyond premium',
  subHeadline: 'elevate your experience',
  childs: [
    {
      name: 'personalized itineraries',
      description:
        'our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.',
    },
    {
      name: 'exclusive experiences',
      description:
        'from private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level.',
    },
    {
      name: 'best facilities',
      description:
        'experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence.',
    },
  ],
} satisfies AbstractContent;

export const CTA = {
  headline: 'discover tailored experiences',
  description:
    'create your own journey, personalized to suit your preferences and interests, ensuring a once-in-a-lifetime adventure awaits.',
  action: {
    text: 'customize your trip',
  },
} satisfies AbstractContent;
