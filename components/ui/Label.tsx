import clsx from 'clsx';
import React, { FC } from 'react';

type Props = {
  category: 'app' | 'architecture' | '';
};
export const Label: FC<Props> = ({ category }) => {
  const color_map: { [key: string]: string } = {
    green: 'text-emerald-700',
    blue: 'text-blue-600',
    orange: 'text-orange-700',
    purple: 'text-purple-600',
    pink: 'text-pink-600',
  };
  const category_map: { [key: string]: string } = {
    app: 'blue',
    architecture: 'green',
  };
  return (
    <span
      className={clsx(
        'mt-5 inline-block text-xs font-medium uppercase tracking-wider',
        category !== ''
          ? color_map[category_map[category]]
          : ''
      )}
    >
      {category}
    </span>
  );
};
