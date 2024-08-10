import type { AbstractContentProvider } from '@/types';

import type { Hero } from '@/lib/constants';
import { titleCase } from '@/lib/title-case';
import { Button } from '@/components/ui/button';
import Shell from '@/components/layouts/shell';

export default function Hero({ data }: AbstractContentProvider<Hero>) {
  return (
    <Shell className="flex min-h-screen flex-col items-center justify-center gap-0 bg-hero-background bg-cover bg-center bg-no-repeat md:items-start">
      <div className="max-w-[24em] text-center md:max-w-[60em] md:text-left">
        <h3 className="text-wrap font-accent text-heading leading-[0.7em] tracking-tight text-accent md:tracking-normal">
          {titleCase(data.headline, true)}
        </h3>
        <h4 className="font-heading text-sub-heading font-bold text-foreground">
          {titleCase(data.subHeadline, true)}
        </h4>
        <p className="text-body text-foreground md:text-sub-heading">
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
