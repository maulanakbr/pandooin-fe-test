import Image from 'next/image';

import { actualDate } from '@/lib/actual-date';
import { cn } from '@/lib/cn';
import { idrPrice } from '@/lib/idr-price';
import { truncate } from '@/lib/truncate';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import type { Itinerary } from '@/app/_hooks/use-itinerary';

interface DestinationCardProps {
  itinerary: Itinerary;
  itemIndex: number;
}

export default function DestinationCard({
  itinerary,
  itemIndex,
}: DestinationCardProps) {
  const matches = useMediaQuery('(max-width: 600px)');

  return (
    <div
      className={cn(
        itemIndex === 1
          ? 'mt-12 flex w-full max-h-full md:mt-12 flex-col gap-4 md:flex-row md:gap-12'
          : 'mt-12 flex w-full max-h-full md:mt-24 flex-col gap-4 md:flex-row md:gap-12'
      )}
    >
      <div
        className={cn(
          'h-60 w-full md:h-[19rem] md:w-[50vw]',
          itemIndex % 2 === 1 && !matches
            ? 'order-first'
            : itemIndex % 2 !== 1 && !matches
              ? 'order-last'
              : undefined
        )}
      >
        <Image
          className="size-full object-cover"
          src={
            itinerary && itinerary?.related_galleries?.length > 0
              ? itinerary?.related_galleries[0]?.src
              : '/assets/pics/hero.png'
          }
          alt={
            itinerary && itinerary?.related_galleries?.length > 0
              ? itinerary?.related_galleries[0]?.gallery_alt_text
              : 'something'
          }
          width={380}
          height={180}
        />
      </div>
      <div className="flex flex-col justify-between gap-4 md:w-[50vw] md:gap-0">
        <div className="flex flex-col gap-2">
          <h4 className="text-[12px] leading-[1em]">
            {actualDate(itinerary?.itinerary_day)}
          </h4>
          <h3 className="text-wrap font-heading font-bold leading-[1.3rem] text-subtle">
            {itinerary?.itinerary_name}
          </h3>
          <p className="text-caption md:text-body">
            {truncate(itinerary?.itinerary_short_description, 240)}
          </p>
          <h4 className="font-bold leading-[1em]">
            {`Organized by ${itinerary?.partner_name}`}
          </h4>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2">
            <h4 className="text-[12px] leading-[1em]">Start From</h4>
            <h3 className="text-sub-heading font-bold leading-[1.3rem] md:text-subtle">
              {idrPrice(
                Number(itinerary?.related_variant?.itinerary_variant_pub_price)
              )}
            </h3>
          </div>
          <Button
            variant="outline-emphasis"
            className="border-emphasis text-emphasis"
          >
            See Details
          </Button>
        </div>
      </div>
    </div>
  );
}
