'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinks } from '@/lib/types/nav.types';

type props = {
  links: NavLinks[];
};

const UpperNav = ({ links }: props) => {
  // get pathname information from address bar
  const pathname = usePathname();

  return (
    <div className="bg-[#F2B11A] hidden md:block">
      <nav className="flex py-3 pr-5 items-center justify-end gap-4">
        {links.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                'text-base text-gray-600 hover:text-gray-800 hover:font-semibold hover:underline',
                {
                  'font-bold text-gray-900 underline': isActive,
                },
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default UpperNav;
