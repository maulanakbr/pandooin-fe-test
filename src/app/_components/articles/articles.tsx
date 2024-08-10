'use client';

import type { AbstractContentProvider } from '@/types';

import { cn } from '@/lib/cn';
import { ARTICLES } from '@/lib/constants';
import { titleCase } from '@/lib/title-case';
import Shell from '@/components/layouts/shell';
import type { Article } from '@/app/_hooks/use-article';

import ArticleCard from './article-card';

export default function Articles({ data }: AbstractContentProvider<Article[]>) {
  return (
    <Shell>
      <div className="mb-8 w-full px-4">
        <div className="flex flex-col gap-4">
          <h4 className="text-wrap font-heading text-sub-heading font-bold leading-[1em] text-subtle md:text-[32px]">
            {titleCase(ARTICLES.headline)}
          </h4>
          <p className="text-caption text-subtle md:text-body">
            {titleCase(ARTICLES.description)}
          </p>
        </div>
        <div className="gap-6 md:grid md:grid-cols-4 md:items-stretch">
          {data?.map((item, index) => (
            <ArticleCard
              article={item}
              key={item.id}
              className={cn(
                index === 0 ? 'min-h-20 md:col-span-2 md:row-span-2' : undefined
              )}
            />
          ))}
        </div>
      </div>
    </Shell>
  );
}
