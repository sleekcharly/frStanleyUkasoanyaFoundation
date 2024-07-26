import Image from 'next/image';
import Hero from '/public/images/priest-formation2.webp';

function About() {
  return (
    <div>
      {/* Hero section */}
      <div className="">
        <div className="relative w-full h-[600px] md:h-screen max-h-[700px]">
          <Image
            src={Hero}
            fill
            alt="Schoenstatt Priestly ordination"
            className="object-cover"
          />

          <h1 className="py-8 px-10 lg:py-14 lg:px-20 text-2xl lg:text-3xl xl:text-4xl font-mono bg-[#38444a80] backdrop-blur-sm  text-slate-200  font-bold w-full lg:w-[50%] xl:w-[66%] absolute bottom-0">
            About Us <br />
            <span className="text-3xl lg:text-4xl xl:text-6xl">
              Our Mission.
            </span>
          </h1>
        </div>
      </div>
      <div className="h-52 flex">
        <div className="hidden lg:flex h-52 w-[25%] items-center justify-center diagonal-stripes" />
        <h3 className="p-5 lg:p-20 flex flex-1 items-center justify-center text-lg lg:text-xl xl:text-2xl bg-[#bd873c] bg-opacity-90 text-gray-200 font-semibold">
          To inspire priestly and religious vocations, nurture Catholic family
          values, and uplift the less privileged. We empower communities through
          education, livelihood promotion, counseling, and relief initiatives.
        </h3>
        <div className="hidden lg:flex h-52 w-[25%] items-center justify-center diagonal-stripes" />
      </div>
    </div>
  );
}

export default About;
