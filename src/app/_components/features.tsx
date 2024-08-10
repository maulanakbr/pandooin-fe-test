import * as React from 'react';
import Image from 'next/image';
import type { AbstractContentProvider } from '@/types';

import type { Features } from '@/lib/constants';
import { titleCase } from '@/lib/title-case';
import Shell from '@/components/layouts/shell';

export default function Features({ data }: AbstractContentProvider<Features>) {
  return (
    <Shell>
      <div className="mb-8 w-full text-center">
        <h3 className="text-wrap font-accent text-[56px] leading-[1em] text-subtle md:text-heading">
          {titleCase(data.headline, true)}
        </h3>
        <h4 className="font-heading text-sub-heading font-bold text-emphasis md:text-[32px]">
          {data.subHeadline.toUpperCase()}
        </h4>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        {data.childs.map((child, index) => (
          <div
            className="flex flex-col items-center justify-center px-6 md:p-0"
            key={child.name}
          >
            <Image
              src={`/assets/pics/feature-0${index + 1}.png`}
              alt={child.name}
              width={128}
              height={128}
            />
            <h4 className="font-body text-sub-heading text-subtle">
              {child.name.toUpperCase()}
            </h4>
            <p className="text-caption text-center md:text-body">
              {titleCase(child.description)}
            </p>
          </div>
        ))}
      </div>
    </Shell>
  );
}
