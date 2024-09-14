'use client';

import { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import { Card, CardContent } from '../ui/card';
import { BsArrowRightCircle } from 'react-icons/bs';
import Link from 'next/link';

import PriestFormation from '/public/images/priest-formation3.webp';
import FamilyLife from '/public/images/family-life3.webp';
import Empowerment from '/public/images/empowerment2.webp';
function AboutCarousel() {
  // set plugin for delay
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full max-w-5xl mt-10 mx-auto"
    >
      <CarouselContent>
        <CarouselItem>
          <Card className="bg-gray-100">
            <CardContent className="p-4 flex flex-col lg:flex-row  items-center justify-center gap-14">
              <div className="w-full max-w-md flex flex-col order-2 lg:order-1">
                <h3 className="text-[#bd873c] font-bold text-3xl  font-serif mb-5">
                  Promoting Priestly and Religious Vocations
                </h3>
                <p className="text-lg">
                  The Foundation is committed to supporting individuals who
                  aspire to dedicate their lives to the priesthood and religious
                  life
                </p>

                <div className="mt-8 flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <BsArrowRightCircle className="w-5 h-5 text-[#bd873c]" />
                    <Link href="/about" className="text-[#bd873c] text-xs">
                      Learn more.
                    </Link>
                  </div>
                  <hr className="bg-[#bd873c] h-0.5 w-32" />
                </div>
              </div>

              <div className="flex relative w-[350px] md:w-[470px] md:h-[470px] h-[350px] xl:w-[570px] xl:h-[500px] order-1 lg:order-2">
                <Image
                  src={PriestFormation}
                  alt="Priestly Formation"
                  fill
                  sizes="(max-width: 768px) 470px, (max-width: 1280) 570px, 350px"
                  className="object-cover rounded-md shadow-md"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="bg-gray-100">
            <CardContent className="p-4 flex flex-col lg:flex-row  items-center justify-center gap-14">
              <div className="w-full max-w-md flex flex-col order-2 lg:order-1">
                <h3 className="text-[#bd873c] font-bold text-3xl  font-serif mb-5">
                  Upholding Catholic Values in Family Life
                </h3>
                <p className="text-lg">
                  By fostering a culture of love, respect, and faithfulness, the
                  Foundation aims to help families navigate the challenges of
                  modern life
                </p>

                <div className="mt-8 flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <BsArrowRightCircle className="w-5 h-5 text-[#bd873c]" />
                    <Link href="/about" className="text-[#bd873c] text-xs">
                      Learn more.
                    </Link>
                  </div>
                  <hr className="bg-[#bd873c] h-0.5 w-32" />
                </div>
              </div>

              <div className="flex relative w-[350px] md:w-[470px] md:h-[470px] h-[350px] xl:w-[570px] xl:h-[500px] order-1 lg:order-2">
                <Image
                  src={FamilyLife}
                  alt="Family Life (Reverend father Stanley Ukasoanya Foundation"
                  fill
                  sizes="(max-width: 768px) 470px, (max-width: 1280px) 570px, 350px"
                  className="object-cover rounded-md shadow-md"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="bg-gray-100">
            <CardContent className="p-4 flex flex-col lg:flex-row  items-center justify-center gap-14">
              <div className="w-full max-w-md flex flex-col order-2 lg:order-1">
                <h3 className="text-[#bd873c] font-bold text-3xl  font-serif mb-5">
                  Empowering the Less Privileged:
                </h3>
                <p className="text-lg">
                  The Foundation is deeply committed to social justice and aims
                  to uplift the less privileged through education, livelihood
                  promotion, and relief interventions.
                </p>

                <div className="mt-8 flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <BsArrowRightCircle className="w-5 h-5 text-[#bd873c]" />
                    <Link href="/about" className="text-[#bd873c] text-xs">
                      Learn more.
                    </Link>
                  </div>
                  <hr className="bg-[#bd873c] h-0.5 w-32" />
                </div>
              </div>

              <div className="flex relative w-[350px] md:w-[470px] md:h-[470px] h-[350px] xl:w-[570px] xl:h-[500px] order-1 lg:order-2">
                <Image
                  src={Empowerment}
                  alt="Empowerment (Reverend Father Stanley Ukasoanya Foundation"
                  fill
                  sizes="(max-width: 768px) 470px, (max-width: 1280px) 570px, 350px"
                  className="object-cover rounded-md shadow-md"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}

export default AboutCarousel;
