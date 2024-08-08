'use client';

import * as React from 'react';
import type { LucideProps } from 'lucide-react';

import { dynamicIconImports, type IconName } from './dynamic-icon-imports';

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
}

const fallback = (
  <div className="size-4 animate-pulse rounded-lg bg-emphasis" />
);

const LazyIcon = React.memo(({ name, ...props }: IconProps) => {
  const LucideIcon = dynamicIconImports[name];

  if (!LucideIcon) return fallback;

  return <LucideIcon {...props} />;
});

LazyIcon.displayName = 'LazyIcon';

export default LazyIcon;
