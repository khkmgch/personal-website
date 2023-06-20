import React from 'react';
import { Container } from './Container';

export const Footer = () => {
  return (
    <Container className='mt-10 border-t border-gray-100 dark:border-gray-800'>
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} Koh. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Made by{" "}
          <a
            href="https://github.com/khkmgch"
            rel="noopener"
            target="_blank">
            Koh(Github)
          </a>
        </span>
        
      </div>
    </Container>
  );
};
