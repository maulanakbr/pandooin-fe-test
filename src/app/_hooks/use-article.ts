import { useQuery } from '@tanstack/react-query';
import * as z from 'zod';

import { END_POINTS, getAxios } from '@/lib/axios';

const Article = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  featured_image: z.string(),
  featured_image_caption: z.string(),
  read_time: z.string(),
});

export type Article = z.infer<typeof Article>;

export default function useFetchArticle() {
  return useQuery({
    queryFn: () => {
      return getAxios<Article[]>(END_POINTS.article);
    },
    queryKey: ['article'],
  });
}
