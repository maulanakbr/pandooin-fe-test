'use client';

import { CTA as CTAItem, FEATURES, HERO } from '@/lib/constants';
import PageWrapper from '@/components/layouts/page-wrapper';

import CTA from './_components/cta';
import Features from './_components/features';
import Hero from './_components/hero';

export default function Home() {
  return (
    <PageWrapper>
      <Hero data={HERO} />
      <Features data={FEATURES} />
      <CTA data={CTAItem} />
    </PageWrapper>
  );
}
