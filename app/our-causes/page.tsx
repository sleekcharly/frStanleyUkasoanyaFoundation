import Image from 'next/image';
import React from 'react';
import CausesHero from '/public/images/causes-background.webp';

function Causes() {
  return (
    <div>
      {/* Hero */}
      <div className="relative w-full h-36  xl:h-56">
        <Image
          alt="Causes hero image"
          src={CausesHero}
          fill
          className="object-cover opacity-90"
        />

        <h1 className="text-slate-200 font-semibold z-10 absolute top-1/2 md:top-auto  left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:bottom-10 xl:left-20 text-4xl md:bottom-5 md:left-20 xl:text-6xl">
          Causes
        </h1>
      </div>

      {/* Causes */}
      <div></div>
    </div>
  );
}

export default Causes;
