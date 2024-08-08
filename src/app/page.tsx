'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import DesktopHeader from '@/components/header/desktop-header';
import MobileHeader from '@/components/header/mobile-header';

export default function Home() {
  const matches = useMediaQuery('(max-width: 600px)');

  return <div>{matches ? <MobileHeader /> : <DesktopHeader />}</div>;
}
