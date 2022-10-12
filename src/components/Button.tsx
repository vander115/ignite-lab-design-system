import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  asChield?: boolean;
}

export function Button({ children, asChield }: ButtonProps) {
  const Comp = asChield ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-4 px-3 bg-yellow-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-yellow-200 focus:ring-2 ring-white',
      )}
    >
      {children}
    </Comp>
  );
}
