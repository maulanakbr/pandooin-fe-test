import Image from 'next/image';

import { cn } from '@/lib/cn';
import { truncate } from '@/lib/truncate';
import type { Article } from '@/app/_hooks/use-article';

interface ArticleCardProps {
  className: string;
  article: Article;
}

export default function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <div className={cn('my-6 flex w-full flex-col', className)}>
      <div className="h-60 w-full md:h-full">
        <Image
          className="size-full object-cover saturate-0 hover:saturate-100"
          src={article?.featured_image}
          alt={article?.title}
          width={380}
          height={180}
        />
      </div>
      <div className="max-h-40 bg-subtle px-7 py-4">
        <p className="text-caption font-semibold text-foreground md:text-body">
          {truncate(article?.title, 50)}
        </p>
      </div>
    </div>
  );
}
