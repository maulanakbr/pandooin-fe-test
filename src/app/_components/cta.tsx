import * as React from 'react';
import Image from 'next/image';
import type { AbstractContentProvider } from '@/types';

import type { Cta } from '@/lib/constants';
import { titleCase } from '@/lib/title-case';
import { Button } from '@/components/ui/button';
import Shell from '@/components/layouts/shell';
import Separator from '@/components/separator';

export default function CTA({ data }: AbstractContentProvider<Cta>) {
  return (
    <Shell>
      <div
        className="mb-8 flex flex-col items-center justify-center gap-4 text-center md:mb-24 md:flex-row md:justify-between md:gap-60 md:px-24 md:text-left"
        key={data.headline}
      >
        <Image
          src={`/assets/pics/cta.png`}
          alt={data.headline}
          width={248}
          height={148}
        />
        <div className="flex flex-col gap-4 px-8 md:gap-8 md:px-0">
          <div>
            <h3 className="text-wrap font-heading text-sub-heading font-bold leading-8 text-emphasis md:text-[28px] md:leading-[4rem]">
              {titleCase(data.headline, true)}
            </h3>
            <p className="mt-4 text-caption md:mt-0 md:text-body">
              {titleCase(data.description)}
            </p>
          </div>
          <Button className="w-full md:max-w-52">
            {titleCase(data.action.text, true)}
          </Button>
        </div>
      </div>
      <Separator className="w-full" isColorVariant />
    </Shell>
  );
}
