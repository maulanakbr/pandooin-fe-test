import * as React from 'react';

import { SeparatorWhite } from './icons/separator-white';
import { SeparatorColor } from './icons/separtor-color';
import Shell from './layouts/shell';

interface SeparatorProps extends React.HTMLAttributes<SVGSVGElement> {
  className: string;
  isColorVariant?: boolean;
}

export default function Separator({
  className,
  isColorVariant,
  ...props
}: SeparatorProps) {
  return (
    <Shell>
      {isColorVariant ? (
        <SeparatorColor className={className} {...props} />
      ) : (
        <SeparatorWhite className={className} {...props} />
      )}
    </Shell>
  );
}
