import type { AbstractContentProvider } from '@/types';

import type { Hero } from '@/lib/constants';
import { titleCase } from '@/lib/title-case';
import { Button } from '@/components/ui/button';
import Shell from '@/components/layouts/shell';

export default function Hero({ data }: AbstractContentProvider<Hero>) {
  return (
    <Shell className="flex bg-hero-background min-h-screen bg-center bg-no-repeat bg-cover justify-center flex-col items-center md:items-start gap-0">
      <div className="text-center md:text-left max-w-[24em] md:max-w-[60em]">
        <h3 className="font-accent leading-[0.7em] text-accent text-heading text-wrap tracking-tight md:tracking-normal">
          {titleCase(data.headline, true)}
        </h3>
        <h4 className="font-heading font-bold text-foreground text-sub-heading">
          {titleCase(data.subHeadline, true)}
        </h4>
        <p className="text-foreground text-body md:text-sub-heading">
          {titleCase(data.description)}
        </p>
        {'action' in data &&
          typeof data.action === 'object' &&
          'text' in data.action! && (
            <Button variant="outline-gold" className="mt-4">
              {titleCase(data.action.text as string, true)}
            </Button>
          )}
      </div>
    </Shell>
  );
}
