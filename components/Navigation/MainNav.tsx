'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinks } from '@/lib/types/nav.types';

type Props = {
  links: NavLinks[];
  upperLinks: NavLinks[];
};

const MainNav = ({ links, upperLinks }: Props) => {
  // get pathname information from address bar
  const pathname = usePathname();

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  // Handling display of mobile menu on device orientation change
  useEffect(() => {
    // Close the menu when the orientation changes
    const handleOrientationChange = () => {
      setIsNavOpen(false);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  // Handling positioning the Main Nav to maintain a fixed position at certain scroll point
  useEffect(() => {
    const handleScroll = () => {
      const mainNav = document.getElementById('main-nav');
      if (mainNav) {
        const offsetTop = mainNav.offsetTop;
        if (window.scrollY > offsetTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="main-nav"
      className={
        isFixed
          ? 'fixed top-0 w-full z-50 bg-white flex items-center justify-between pr-5 py-5 shadow-md shadow-slate-900'
          : 'bg-white flex items-center justify-between pr-5 py-5 shadow-md shadow-slate-900'
      }
    >
      <div className={`flex items-center ml-2 ${!isFixed && 'lg:ml-[180px]'}`}>
        {/* foundation logo */}
        <Link
          href="/"
          className={`relative flex items-center w-[90px] h-[90px]  ${
            isFixed
              ? 'lg:w-[90px] lg:h-[90px]'
              : 'md:absolute md:top-3 md:left-7 md:w-[120px] md:h-[120px] xl:w-[150px] xl:h-[150px]'
          }`}
        >
          <Image
            src="/icons/logo-image-only.png"
            alt="Fr Stanley Ukasoanya FOundation logo"
            fill
            sizes="(max-width: 768px) 120px, (max-width: 1280px) 150px, 90px"
          />
        </Link>

        <Link
          href="/"
          className={`relative w-[100px] h-[50px] xl:w-[140px] xl:h-[80px] md:ml-[140px] lg:ml-[-20px] xl:ml-[-10px] ${
            isFixed &&
            'md:-ml-2 lg:ml-[5px] xl:ml-[10px] xl:w-[130px] xl:h-[70px]'
          }`}
        >
          <Image
            src="/icons/logo-text-only.png"
            alt="Rev Fr Stanley Ukasoanya Foundation"
            fill
            sizes="(max-width: 1280px) 140px, 100px"
          />
        </Link>
      </div>

      <section className="flex items-center space-x-6">
        {/* Mobile Navigation Menu */}
        <nav className="flex lg:hidden">
          <div className="flex items-center space-x-6">
            {/* Hamburger Icon */}
            <div
              className="space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle menu on mobile
            >
              <span className="block h-0.5 w-8 bg-[#bd873c] transition-transform duration-300"></span>
              <span className="block h-0.5 w-8 bg-[#bd873c] transition-transform duration-300"></span>
              <span className="block h-0.5 w-8 bg-[#bd873c] transition-transform duration-300"></span>
            </div>

            <Link
              href="/donate"
              className="bg-[#bd873c] py-1 px-3 text-base text-white rounded-lg hover:text-white hidden md:flex"
            >
              Donate
            </Link>
          </div>

          <div
            className={`fixed w-[300px] h-[100vh] top-0 right-0 z-50 bg-gray-800 transform transition-transform duration-300 ${
              isNavOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div
              className="absolute top-0 right-0 px-6 py-4 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <div className="flex flex-col items-center justify-between space-y-6 min-h-[300px] mt-20">
              <Link
                href="/donate"
                className="bg-[#bd873c] w-[90%] py-1 px-3 text-base text-white rounded-lg hover:text-white uppercase flex justify-center font-semibold mb-2"
                onClick={() => setIsNavOpen(false)}
              >
                Donate
              </Link>

              <div className="flex flex-col w-full space-y-6 border-t-[0.3px] border-t-slate-700">
                {links
                  .filter((link) => link.label !== 'Donate')
                  .map((link) => {
                    const isActive =
                      pathname === link.route ||
                      pathname.startsWith(`${link.route}/`);

                    return (
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          `text-sm text-white hover:text-[#F2B11A] hover:ease-in-out hover:transition-all hover:delay-100 border-b-[0.3px] border-b-slate-700 p-2 ${
                            link.label === 'Donate' &&
                            'bg-[#F2B11A] py-1 px-3 text-gray-900 rounded-lg hover:text-white'
                          }
                    `,
                          {
                            'font-bold text-[#bd873c]': isActive,
                          },
                        )}
                        onClick={() => setIsNavOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
              </div>

              <div className="w-full flex items-center text-center">
                {upperLinks.map((link) => {
                  return (
                    <Link
                      href={link.route}
                      key={link.label}
                      className="text-slate-400 p-2 border-r-[0.4px] border-r-slate-400 last:border-r-0 text-xs"
                      onClick={() => setIsNavOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop Navigation menu */}
        <nav className="hidden lg:flex py-3 items-center gap-4">
          {links.map((link) => {
            const isActive =
              pathname === link.route || pathname.startsWith(`${link.route}/`);

            return (
              <Link
                href={link.route}
                key={link.label}
                className={cn(
                  `text-lg uppercase text-gray-900 hover:text-white hover:bg-[#bd873c] py-1 px-2 rounded-md hover:ease-in-out hover:transition-all hover:delay-100 ${
                    link.label === 'Donate' &&
                    'bg-[#bd873c] py-1 px-3 text-white rounded-lg hover:text-white'
                  }
                    `,
                  {
                    'font-bold text-[#bd873c]': isActive,
                    'text-gray-700': link.label == 'Donate',
                  },
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </section>
    </div>
  );
};

export default MainNav;
