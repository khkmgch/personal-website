import React, { Fragment } from 'react';
import { Container } from './Container';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { major_mono_display } from '@/pages/fonts';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { MenuItem } from '@/types/MenuItem.type';

export const Navbar = () => {
  const leftmenu: MenuItem[] = [
    { label: 'Works', href: '/' },
  ];

  const rightmenu: MenuItem[] = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];
  const mobilemenu: MenuItem[] = [
    ...leftmenu,
    ...rightmenu,
  ];

  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex flex-wrap justify-between md:flex-nowrap md:gap-10'>
                <div className='order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end'>
                  {leftmenu.map(
                    (
                      item: MenuItem,
                      index: number,
                    ) => (
                      <Fragment key={`${index}`}>
                        <Link
                          href={item.href}
                          key={`${index}`}
                          className='px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400'
                          target={
                            item.external ? '_blank' : ''
                          }
                          rel={
                            item.external ? 'noopener' : ''
                          }
                        >
                          {item.label}
                        </Link>
                      </Fragment>
                    )
                  )}
                </div>
                <div className='flex w-full items-center justify-between md:w-auto'>
                  <Link
                    href='/'
                    className='w-28 dark:hidden'
                  >
                    <span
                      className={`block text-center text-5xl ${major_mono_display.className}`}
                    >
                      Koh
                    </span>
                  </Link>

                  <Disclosure.Button
                    aria-label='Toggle Menu'
                    className='ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden '
                  >
                    <div className='h-8 w-8 fill-current'>
                      {open && <XMarkIcon />}
                      {!open && <Bars3Icon />}
                    </div>
                  </Disclosure.Button>
                </div>
                <div className='order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row'>
                  {rightmenu.map(
                    (
                      item: MenuItem,
                      index: number,
                    ) => (
                      <Fragment
                        key={`${item.label}${index}`}
                      >
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className='px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400'
                          target={
                            item.external ? '_blank' : ''
                          }
                          rel={
                            item.external ? 'noopener' : ''
                          }
                        >
                          <span> {item.label}</span>
                        </Link>
                      </Fragment>
                    )
                  )}
                </div>
              </div>
              <Disclosure.Panel>
                <div className='order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden'>
                  {mobilemenu.map(
                    (
                      item: MenuItem,
                      index: number,
                    ) => (
                      <Fragment
                        key={`${item.label}${index}`}
                      >
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className='w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400'
                          target={
                            item.external ? '_blank' : ''
                          }
                          rel={
                            item.external ? 'noopener' : ''
                          }
                        >
                          {item.label}
                        </Link>
                      </Fragment>
                    )
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
};
