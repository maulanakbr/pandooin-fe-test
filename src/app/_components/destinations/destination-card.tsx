import Image from 'next/image';

import { actualDate } from '@/lib/actual-date';
import { titleClear } from '@/lib/title-clear';
import { truncate } from '@/lib/truncate';
import { Button } from '@/components/ui/button';
import type { Itinerary } from '@/app/_hooks/use-itinerary';

interface DestinationCardProps {
  itinerary: Itinerary;
}

export default function DestinationCard({ itinerary }: DestinationCardProps) {
  return (
    <div className="my-8 flex w-full flex-col gap-4">
      {/* Image */}
      <div className="h-60 w-full">
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
      {/* Content */}
      <div className="flex flex-col gap-2">
        <h4 className="text-[12px] leading-[1em] md:text-[32px]">
          {actualDate(itinerary?.itinerary_day)}
        </h4>
        <h3 className="text-wrap font-heading font-bold leading-[1.3rem] text-subtle md:text-heading">
          {itinerary?.itinerary_name}
        </h3>
        <p className="text-caption md:text-body">
          {truncate(itinerary?.itinerary_short_description, 240)}
        </p>
        <h4 className="font-bold leading-[1em] md:text-[32px]">
          {`Organized by ${itinerary?.partner_name}`}
        </h4>
      </div>
      {/* Action */}
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <h4 className="text-[12px] leading-[1em] md:text-[32px]">
            Start From
          </h4>
          <h3 className="text-sub-heading font-bold leading-[1.3rem] md:text-heading">
            {itinerary?.related_variant?.itinerary_variant_pub_price}
          </h3>
        </div>
        <Button variant="outline" className="border-emphasis text-emphasis">
          See Details
        </Button>
      </div>
    </div>
  );
}
