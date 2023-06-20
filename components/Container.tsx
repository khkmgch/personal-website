import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
type Props = {
  className?: string | undefined;
  children: ReactNode;
};
export const Container: FC<Props> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        'container mx-auto px-8 py-5 lg:py-8 xl:px-5',
        className
      )}
    >
      {children}
    </div>
  );
};
