import dynamic from 'next/dynamic';

export type IconName = keyof typeof dynamicIconImports;

const loading = () => (
  <div className="size-4 animate-pulse rounded-lg bg-emphasis" />
);

export const dynamicIconImports = {
  'mobile-menu': dynamic(
    () => import('lucide-react/dist/esm/icons/align-justify'),
    { loading }
  ),
  x: dynamic(() => import('lucide-react/dist/esm/icons/x'), { loading }),
};
