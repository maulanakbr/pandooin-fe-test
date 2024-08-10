'use client';

import { CTA as CTAItem, FEATURES, HERO } from '@/lib/constants';
import Footer from '@/components/footer';
import PageWrapper from '@/components/layouts/page-wrapper';

import Articles from '../_components/articles/articles';
import CTA from '../_components/cta';
import Destinations from '../_components/destinations/destinations';
import Features from '../_components/features';
import Hero from '../_components/hero';
import useFetchArticle from '../_hooks/use-article';
import useFetchItinerary from '../_hooks/use-itinerary';

export default function Home() {
  const { data: responseItineraries } = useFetchItinerary();
  const { data: responseArticles } = useFetchArticle();

  return (
    <PageWrapper>
      <Hero data={HERO} />
      <Features data={FEATURES} />
      <CTA data={CTAItem} />
      <Destinations data={responseItineraries?.data!} />
      <Articles data={responseArticles?.data!} />
    </PageWrapper>
  );
}
