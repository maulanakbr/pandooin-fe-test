'use client';

import type { AbstractContentProvider } from '@/types';

import { DESTINATIONS } from '@/lib/constants';
import { titleCase } from '@/lib/title-case';
import { LucideIcons } from '@/components/icons/lucide-icons';
import Shell from '@/components/layouts/shell';

import type { Itinerary } from '../../_hooks/use-itinerary';
import DestinationCard from './destination-card';

export default function Destinations({
  data,
}: AbstractContentProvider<Itinerary[]>) {
  return (
    <Shell>
      <div className="mb-8 w-full px-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <h4 className="text-wrap font-heading text-sub-heading font-bold leading-[1em] text-emphasis md:text-[32px]">
            {titleCase(DESTINATIONS.headline)}
          </h4>
          <span className="inline-flex items-center gap-4">
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-emphasis text-center">
              <LucideIcons.chevronRight className="text-emphasis" size={32} />
            </div>
            <h4 className="text-wrap font-semibold leading-[1em] text">
              {DESTINATIONS.action.text.toUpperCase()}
            </h4>
          </span>
        </div>
        {data?.map((item, index) => (
          <DestinationCard
            itinerary={item}
            itemIndex={index + 1}
            key={item.itinerary_id}
          />
        ))}
      </div>
    </Shell>
  );
}
