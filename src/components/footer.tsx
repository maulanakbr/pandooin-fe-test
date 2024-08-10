import { FOOTER } from '@/lib/constants';
import { titleCase } from '@/lib/title-case';

import { Email } from './icons/email';
import { Facebook } from './icons/facebook';
import { Instagram } from './icons/instagram';

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="w-full text-caption bg-emphasis py-4 md:px-4 md:items-center flex flex-col md:flex-row md:justify-between items-center text-center text-foreground">
      <div className="flex flex-col justify-center items-center gap-4 mb-4 md:mb-0">
        <h4>
          &copy;{' '}
          {`${currentYear} ${titleCase(FOOTER.headline)} by ${titleCase(FOOTER.subHeadline)}`}
        </h4>
      </div>
      <div className="flex gap-4">
        <Facebook className="w-5 h-6" />
        <Instagram className="w-6 h-6" />
        <Email className="w-6 h-6" />
      </div>
    </footer>
  );
}
