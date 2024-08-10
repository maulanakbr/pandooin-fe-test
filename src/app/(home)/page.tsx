'use client';

import { CTA as CTAItem, FEATURES, HERO } from '@/lib/constants';
import PageWrapper from '@/components/layouts/page-wrapper';

import CTA from '../_components/cta';
import Destinations from '../_components/destinations/destinations';
import Features from '../_components/features';
import Hero from '../_components/hero';
import useFetchItinerary from '../_hooks/use-itinerary';

export default function Home() {
  const { data: response } = useFetchItinerary();

  return (
    <PageWrapper>
      <Hero data={HERO} />
      <Features data={FEATURES} />
      <CTA data={CTAItem} />
      <Destinations data={response?.data!} />
    </PageWrapper>
  );
}
