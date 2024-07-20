import Image from 'next/image';
import Hero from '/public/images/hero.webp';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveDown } from 'lucide-react';
import MiniAbout from '@/components/home/MiniAbout';
import Causes from '@/components/home/Causes';
import Campaigns from '@/components/home/Campaigns';

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image
          src={Hero}
          alt="Home_hero"
          fill
          className="object-cover opacity-50"
        />

        <header className="absolute z-10 inset-0  mx-auto mt-[120px] flex flex-col space-y-28 text-center">
          <div className="flex flex-col gap-8 text-center">
            <h1 className="text-gray-900 text-4xl md:text-5xl font-bold p-2">
              A VOCATION <br /> THAT MAKES A LASTING IMPACT
            </h1>
            <h2 className="text-lg md:text-xl p-2 font-semibold">
              Nurturing the Future of <br /> Priests, Families, and Communities
            </h2>
          </div>

          <Link href="/" className="w-12 mx-auto ">
            <Button className="rounded-2xl h-20 w-12 bg-[#bd873c] border border-gray-200 shadow-xl animate-bounce">
              <MoveDown className="mt-5 text-gray-100" />
            </Button>
          </Link>
        </header>
      </div>

      {/* Mini About section */}
      <MiniAbout />

      {/* Causes Section */}
      <Causes />

      {/* Campaigns section */}
      <Campaigns />
    </div>
  );
};

export default Home;
