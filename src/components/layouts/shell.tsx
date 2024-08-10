import { cn } from '@/lib/cn';

interface ShellProps extends React.HTMLAttributes<HTMLDetailsElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Shell({ children, className, ...props }: ShellProps) {
  return (
    <section
      className={cn('max-w-full px-[0.5rem] md:px-[6rem] text', className)}
      {...props}
    >
      {children}
    </section>
  );
}
