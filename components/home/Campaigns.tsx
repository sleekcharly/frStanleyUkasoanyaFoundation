import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import FrStanley from '/public/images/fr-stanley-ukasoanya.webp';
import CardPhoto1 from '/public/images/memorial-1.webp';
import CardPhoto2 from '/public/images/memorial-2.webp';
import CardPhoto3 from '/public/images/memorial-3.webp';
import CardPhoto4 from '/public/images/memorial-4.webp';

function Campaigns() {
  return (
    <section className="p-5 lg:px-20">
      <div className="pl-5 border-l-8 border-l-[#bd873c] h-10 lg:h-20 flex items-center mb-5 md:mb-14">
        <h2 className="font-sans text-lg md:text-3xl lg:text-4xl font-bold">
          Latest Campaigns & Events
        </h2>
      </div>

      {/* Events section */}
      {/* <div className="flex flex-col xl:flex-row items-center xl:justify-center gap-10">
        <div className="flex flex-col lg:flex-row xl:flex-col lg:border-b-[8px] border-b-[#bd873c] xl:border-b-0 items-center w-[392px] lg:w-full xl:w-[392px]">
          <div className="relative w-full max-w-[392px] h-[294px]">
            <Image
              src={FrStanley}
              alt="Rev. Fr. Stanley Ukasoanya"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <div className="w-[350px] sm:w-[360px] lg:w-full xl:max-w-[360px] p-7 border-b-[8px] border-b-[#bd873c] lg:border-b-0 xl:border-b-[8px] shadow-xl hover:bg-[#bd873c] -mt-20 lg:mt-0 xl:-mt-20 bg-white z-10 group">
            <div className="flex items-center mb-6 font-bold">
              <h3 className="flex-1 text-xl xl:text-2xl">
                One Year Memorial 2024
              </h3>
              <ChevronRight className="group-hover:text-white" />
            </div>
            <p className="text-lg ">
              The Board of Trustees of the Foundation cordially invites you to
              the official Launch Ceremony which will take place on{' '}
              <em className="font-semibold">August 8, 2024</em>, at the{' '}
              <em className="font-semibold">
                Schoenstatt Fathers Community, Ijokodo, Ibadan, Oyo State
              </em>
              , by 10am.
              <br />
              <br />
              The ceremony will also serve as the first memorial of the
              departure of Late Rev. Fr. Stanley Ukasoanya. We look forward to
              hosting you at the ceremony as a collaborator/friend of the
              foundation.
            </p>
          </div>
        </div>
      </div> */}

      {/* Events Pictures section */}
      <div className="p-1">
        {/* Group 1 */}
        <div className="flex flex-col gap-3">
          {/* Card group 1 */}
          <div className="flex flex-col md:flex-row gap-1 w-full">
            <div className="flex items-center gap-[0.5px]">
              {/* info card */}
              <div className="flex flex-col justify-center gap-2 w-full h-[143px] sm:h-[250px] lg:h-[294px] xl:h-[319px] p-2 bg-[#bd873c] text-gray-100">
                <h4 className="text-[10px] sm:text-[15px] uppercase">
                  takeoff
                </h4>
                <h3 className="text-[14px] sm:text-[22px]">
                  One Year Memorial
                </h3>
                <p className="text-[10px] sm:text-[15px] text-wrap">
                  Our Foundation was officially launched on the 8th of August
                  2024 at the one year memorial of our late brother, son and
                  extra ordinary Friend.
                </p>
              </div>

              {/* event image */}
              <div className="relative w-full h-[143px] sm:h-[250px] lg:h-[294px] xl:h-[319px]">
                <Image
                  src={FrStanley}
                  alt="Memorial Photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative w-full h-[143px] sm:h-[250px] lg:h-[294px] xl:h-[319px]">
              <Image
                src={CardPhoto1}
                alt="Memorial Photo"
                className="object-cover"
                fill
              />
            </div>
          </div>

          {/* Card group 2 */}
          <div className="flex flex-col mf:flex-row gap-1 w-full">
            {/* Card group photo 1 */}
            <div className="relative w-full h-[143px] sm:h-[250px] lg:h-[294px] xl:h-[319px]">
              <Image
                src={CardPhoto2}
                alt="Memorial photo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-[0.5px]">
              {/* Card Group photo 2 */}
              <div className="relative w-full h-[143px] sm:h-[250px] lg:h-[294px] xl:h-[319px]">
                <Image
                  src={CardPhoto3}
                  alt="Memorial photo"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Card group photo 3 */}
              <div className="relative w-full h-[143px] sm:h-[250px] lg:h-[294px] xl:h-[319px]">
                <Image
                  src={CardPhoto4}
                  alt="Memorial photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Group 2 */}
        <div></div>
      </div>
    </section>
  );
}

export default Campaigns;
