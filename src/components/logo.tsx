import { cn } from '@/lib/cn';

import { BrandGold } from './icons/brand-gold';
import { BrandWhite } from './icons/brand-white';

type LogoProps = {
  className: string;
  isMobile: boolean;
};

export default function Logo({ className, isMobile }: Partial<LogoProps>) {
  return (
    <>
      {isMobile ? (
        <BrandGold className={cn('cursor-pointer', className)} />
      ) : (
        <BrandWhite className={cn('cursor-pointer', className)} />
      )}
    </>
  );
}
