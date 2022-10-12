import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex py-2 px-3 h-12 rounded w-full items-center gap-3 bg-gray-800 focus-within:ring-2 ring-yellow-200">
      {props.children}
    </div>
  );
}

export interface TextInputIconsProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconsProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}
TextInputIcon.displayName = 'TextInputIcon';

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent w-full flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
