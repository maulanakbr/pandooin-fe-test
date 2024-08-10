import { FOOTER } from '@/lib/constants';
import { titleCase } from '@/lib/title-case';

import { Email } from './icons/email';
import { Facebook } from './icons/facebook';
import { Instagram } from './icons/instagram';

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="flex w-full flex-col items-center bg-emphasis py-4 text-center text-caption text-foreground md:flex-row md:items-center md:justify-between md:px-4">
      <div className="mb-4 flex flex-col items-center justify-center gap-4 md:mb-0">
        <h4>
          &copy;{' '}
          {`${currentYear} ${titleCase(FOOTER.headline)} by ${titleCase(FOOTER.subHeadline)}`}
        </h4>
      </div>
      <div className="flex gap-4">
        <Facebook className="h-6 w-5" />
        <Instagram className="size-6" />
        <Email className="size-6" />
      </div>
    </footer>
  );
}
