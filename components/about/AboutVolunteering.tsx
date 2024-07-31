import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

function AboutVolunteering() {
  return (
    <div className="bg-slate-700 mb-10 mt-10 relative max-w-5xl m-auto shadow-lg">
      <h3 className="text-2xl lg:text-3xl py-10 px-14 md:py-14 lg:py-28 lg:px-20 font-serif text-gray-200 font-bold">
        Interested in Championing These Causes Alongside Us?
      </h3>
      <Button className="w-full bg-[#bd873c] hover:bg-red-500 rounded-none lg:w-[25%] lg:absolute lg:bottom-0 lg:right-0">
        <Link
          href="/volunteering"
          className="uppercase text-xl text-center font-semibold"
        >
          Volunteer
        </Link>
      </Button>
    </div>
  );
}

export default AboutVolunteering;
