import Image from 'next/image';
import Priests from '/public/images/priest-formation5.webp';
import Logo from '/public/icons/logo-image-only.webp';
import { Button } from '../ui/button';
import Link from 'next/link';

function Donation() {
  return (
    <section className="relative w-full h-[600px] bg-black">
      <Image
        src={Priests}
        alt="Rev. Fr. Stanley Ukasoanya"
        fill
        className="object-cover opacity-70"
      />

      <div className="absolute p-5 lg:p-10 left-[5%] right-[5%] bottom-10 z-10 bg-white flex flex-col md:flex-row items-center md:justify-center lg:space-x-40">
        <div className="max-w-[500px]">
          <div className="relative w-10 h-10 lg:w-16 lg:h-16 mb-5">
            <Image
              src={Logo}
              alt="Reverend Father Stanley Ukasoanya Foundation"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="uppercase font-mono text-lg lg:text-xl xl:text-2xl font-semibold mb-5">
            Your Donations Support Our Mission.
            <br />
            <span className="bg-[#bd873c] p-1 text-slate-200">
              Donate Today
            </span>
          </h2>
          <p className="mb-5 text-base lg:text-lg xl:text-xl">
            We depend on essential financial contributions from individuals,
            corporate sponsors, and partners to provide free support for
            Catholic priestly formation, family values, and empowerment.
          </p>
        </div>
        <Link
          href="/donate"
          className="w-full bg-[#bd873c] max-w-[450px] text-lg lg:text-xl xl:text-2xl font-mono uppercase transition-all hover:scale-110 text-center text-white"
        >
          Donate Now
        </Link>
      </div>
    </section>
  );
}

export default Donation;
