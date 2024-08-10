import * as React from 'react';
import Image from 'next/image';
import { AbstractContentProvider } from '@/types';

import type { Features } from '@/lib/constants';
import { titleCase } from '@/lib/title-case';
import Shell from '@/components/layouts/shell';

export default function Features({ data }: AbstractContentProvider<Features>) {
  return (
    <Shell>
      <div className="text-center w-full mb-[2rem]">
        <h3 className="font-accent leading-[1em] text-subtle text-[56px] md:text-heading text-wrap">
          {titleCase(data.headline, true)}
        </h3>
        <h4 className="font-heading font-bold text-emphasis text-sub-heading md:text-[32px]">
          {data.subHeadline.toUpperCase()}
        </h4>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-[1rem] md:gap-[2rem]">
        {data.childs.map((child, index) => (
          <div
            className="flex flex-col justify-center p-6 md:p-0 items-center"
            key={child.name}
          >
            <Image
              src={`/assets/pics/feature-0${index + 1}.png`}
              alt={child.name}
              width={128}
              height={128}
            />
            <h4 className="font-body text-subtle text-sub-heading">
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
