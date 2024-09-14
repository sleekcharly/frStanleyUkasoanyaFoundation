import Image from 'next/image';
import React from 'react';
import CausesHero from '/public/images/causes-background.webp';
import PriestFormation from '/public/images/priest-formation2.webp';
import FamilyLife from '/public/images/family-life4.webp';
import Empowerment from '/public/images/empowerment2.webp';
import { Button } from '@/components/ui/button';

function Causes() {
  return (
    <div>
      {/* Hero */}
      <div className="relative w-full h-36  xl:h-56">
        <Image
          alt="Causes hero image"
          src={CausesHero}
          fill
          sizes="100vw"
          className="object-cover opacity-90"
        />

        <h1 className="text-slate-200 font-semibold z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 xl:bottom-10 xl:left-30 text-4xl md:bottom-5 md:left-20 xl:text-6xl">
          Causes
        </h1>
      </div>

      {/* Causes */}
      {/* grid area */}
      <div className="flex flex-col items-center justify-center pt-10 pb-10 lg:pt-28 lg:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="max-w-[450px] border border-gray-300 rounded-lg shadow-md">
            <div className="relative w-full max-w-[450px] h-[250px]">
              <Image
                src={PriestFormation}
                alt="Priestly formation"
                fill
                sizes="450px"
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 ">
              <h3 className="text-xl font-semibold mb-4">Priestly Formation</h3>
              <p className="mb-8">
                Inspiring Future Leaders: Championing Priestly and Religious
                Vocations.
              </p>
              <hr className="mb-4 h-1 bg-[#bd873c]" />
              <Button>Learn more</Button>
            </div>
          </div>
          <div className="max-w-[450px] border border-gray-300 rounded-lg shadow-md">
            <div className="relative  w-full max-w-[450px] h-[250px]">
              <Image
                src={FamilyLife}
                alt="Family life photo"
                fill
                sizes="450px"
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Family Life</h3>
              <p className="mb-8">
                Fostering Family Values for a Stronger Bond and Brighter Future.
              </p>
              <hr className="mb-4 h-1 bg-[#bd873c]" />
              <Button>Learn more</Button>
            </div>
          </div>
          <div className="max-w-[450px] border border-gray-300 rounded-lg shadow-md">
            <div className="relative  w-full max-w-[450px] h-[250px]">
              <Image
                src={Empowerment}
                alt="Empowerment photo"
                fill
                sizes="450px"
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Empowerment</h3>
              <p className="mb-8">
                Transforming lives: Education, livelihoods, counseling, and
                relief for the less privileged.
              </p>
              <hr className="mb-4 h-1 bg-[#bd873c]" />
              <Button>Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Causes;
