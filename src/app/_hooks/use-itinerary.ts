import { useQuery } from '@tanstack/react-query';
import * as z from 'zod';

import { END_POINTS, getAxios } from '@/lib/axios';

const Itinerary = z.object({
  itinerary_id: z.string(),
  itinerary_name: z.string(),
  itinerary_day: z.number(),
  itinerary_slug: z.string(),
  partner_name: z.string(),
  partner_alias: z.string(),
  itinerary_location: z.string(),
  itinerary_short_description: z.string(),
  itinearary_long_description: z.string(),
  morph_class: z.string(),
  related_galleries: z.array(
    z.object({
      itinerary_id: z.string(),
      gallery_id: z.string(),
      gallery_alt_text: z.string(),
      gallery_path: z.string(),
      src: z.string(),
      title: z.string(),
    })
  ),
  related_variant: z.object({
    itinerary_id: z.string(),
    itinerary_variant_disc_price: z.string(),
    itinerary_variant_id: z.number(),
    itinerary_variant_pub_price: z.string(),
    related_unit: z.string(),
    unit_name: z.string(),
  }),
});

export type Itinerary = z.infer<typeof Itinerary>;

export default function useFetchItinerary() {
  return useQuery({
    queryFn: () => {
      return getAxios<Itinerary[]>(END_POINTS.itinerary);
    },
    queryKey: ['itinerary'],
  });
}
