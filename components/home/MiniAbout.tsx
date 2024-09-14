import Image from 'next/image';
import Link from 'next/link';
import { BsExclamationCircle } from 'react-icons/bs';
import PriestFormation from '/public/images/priest-formation.webp';
import FamilyLife from '/public/images/family-life.webp';

function MiniAbout() {
  return (
    <section
      id="about-section"
      className="bg-white flex flex-col lg:flex-row items-center justify-center gap-6 p-auto text-center md:text-left p-10 lg:px-32 xl:px-32 xl:py-32"
    >
      <div className="flex-1 max-w-[700px]">
        <h2 className="uppercase text-[#bd873c] tracking-wider font-bold text-lg mb-3">
          Who we are
        </h2>
        <h3 className="text-2xl lg:text-3xl font-semibold mb-3">
          Promoting Priestly Vocations and Family Values
        </h3>

        <hr className="bg-[#bd873c] h-1 w-full md:w-48 mb-10" />

        <p className="tracking-wide text-lg">
          Welcome to the Rev. Fr. Stanley Ukasoanya Foundation! Our mission is
          to inspire priestly and religious vocations, nurture Catholic family
          values, and uplift the less privileged. We empower communities through
          education, livelihood promotion, counseling, and relief initiatives.
          Dedicated to making a meaningful impact, we are committed to
          transforming lives with our unwavering support.
        </p>

        <div className="mt-3 flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center space-x-2">
            <BsExclamationCircle className="w-5 h-5 text-[#bd873c]" />
            <Link href="/about" className="text-[#bd873c] text-xs">
              Learn more about us
            </Link>
          </div>
          <hr className="bg-[#bd873c] h-0.5 w-48" />
        </div>
      </div>
      <div className="relative">
        <div className="relative w-[300px] h-[250px] md:w-[400px] md:h-[350px] shadow-xl">
          <Image
            src={PriestFormation}
            fill
            sizes="(max-width: 768px) 400px, 300px"
            alt="Priest Formation"
            className="object-cover rounded-md"
          />
        </div>
        <div className="absolute -bottom-5 -right-10 md:-bottom-10 md:-right-20">
          <div className="relative w-[220px] h-[140px] md:w-[280px] md:h-[200px] shadow-xl">
            <Image
              src={FamilyLife}
              fill
              sizes="(max-width: 768px) 280px, 220px"
              alt="Priest Formation"
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiniAbout;
