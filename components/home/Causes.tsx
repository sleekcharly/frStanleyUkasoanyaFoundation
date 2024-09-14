import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import PriestFormation from '/public/images/priest-formation2.webp';
import FamilyLife from '/public/images/family-life2.webp';
import Empowerment from '/public/images/empowerment.webp';
function Causes() {
  return (
    <section className="bg-gray-200 p-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-center  gap-6 mb-14">
        <p className="font-semibold tracking-widest text-gray-500">
          IMPACT AREAS
        </p>
        <div className="bg-[#bd873c] h-0.5 w-40" />
        <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold">
          Our Causes
        </h2>
      </div>

      {/* grid area */}
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="max-w-[450px] border border-gray-300 rounded-lg shadow-md">
            <div className="relative w-full max-w-[450px] h-[250px]">
              <Image
                src={PriestFormation}
                alt="Priestly formation"
                fill
                sizes="(max-width: 1024px) 450px, 100vw"
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
                sizes="(max-width: 1024px) 450px, 100vw"
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
            <div className="relative w-full max-w-[450px] h-[250px]">
              <Image
                src={Empowerment}
                alt="Empowerment photo"
                fill
                sizes="(max-width: 1024px) 450px, 100vw"
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
    </section>
  );
}

export default Causes;
