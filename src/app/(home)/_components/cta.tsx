import * as React from 'react';
import Image from 'next/image';
import { AbstractContentProvider } from '@/types';

import type { Cta } from '@/lib/constants';
import { titleCase } from '@/lib/title-case';
import { Button } from '@/components/ui/button';
import Shell from '@/components/layouts/shell';

export default function CTA({ data }: AbstractContentProvider<Cta>) {
  return (
    <Shell>
      <div
        className="flex flex-col md:flex-row md:px-[6rem] justify-center md:justify-between items-center mb-[2rem] md:text-left text-center gap-[1rem] md:gap-[15rem]"
        key={data.headline}
      >
        <Image
          src={`/assets/pics/cta.png`}
          alt={data.headline}
          width={288}
          height={188}
        />
        <div className="flex flex-col px-[2rem] md:px-0 gap-[2rem]">
          <div>
            <h3 className="font-heading font-bold leading-[2rem] md:leading-[4rem] text-emphasis text-sub-heading md:text-[28px] text-wrap">
              {titleCase(data.headline, true)}
            </h3>
            <p className="text-caption md:text-body mt-[2rem]">
              {titleCase(data.description)}
            </p>
          </div>
          <Button className="w-full md:max-w-[13rem]">
            {titleCase(data.action.text, true)}
          </Button>
        </div>
      </div>
    </Shell>
  );
}
