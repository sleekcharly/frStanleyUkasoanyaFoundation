import Image from 'next/image';
import Hero from '/public/images/priest-formation2.webp';
import AboutCarousel from '@/components/about/AboutCarousel';

function About() {
  return (
    <div>
      {/* Hero section */}
      <section>
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
      </section>

      <section className="h-52 flex">
        <div className="lg:flex h-52 w-[2%] lg:w-[25%] items-center justify-center diagonal-stripes" />
        <h3 className="p-5 lg:p-20 flex flex-1 items-center justify-center text-lg lg:text-xl xl:text-2xl bg-[#bd873c] bg-opacity-90 text-gray-200 font-semibold">
          To inspire priestly and religious vocations, nurture Catholic family
          values, and uplift the less privileged. We empower communities through
          education, livelihood promotion, counseling, and relief initiatives.
        </h3>
        <div className="lg:flex h-52 w-[2%] lg:w-[25%] items-center justify-center diagonal-stripes" />
      </section>

      <section className="relative px-5 py-14 sm:p-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/background-1.webp')" }}
        ></div>
        <div className="relative flex flex-col items-center justify-center m-auto z-10">
          <h3 className="text-[#bd873c] text-center font-bold text-3xl lg:text-4xl  font-serif mb-10 w-full max-w-3xl">
            Promoting priestly vocation and family values is our M.O.
          </h3>

          <div className="flex flex-col gap-5 text-base lg:text-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start  justify-center gap-8">
              <p className="w-full md:w-[30%]">
                The Rev. Fr. Stanley Ukasoanya Foundation is a beacon of hope
                and transformation, dedicated to promoting priestly vocations,
                Catholic family values, and empowering the less privileged in
                society. Founded in memory of the late Rev. Fr. Stanley
                Ukasoanya, the Foundation embodies his lifelong commitment to
                faith, service, and compassion. Through various initiatives, the
                Foundation aims to create a positive and lasting impact on
                individuals and communities, inspired by Fr. Stanley&apos;s
                exemplary life and dedication to the Church.
              </p>

              <div className="relative w-[300px] h-[200px] md:w-[350px] md:h-[400px] xl:w-[450px] xl:h-[400px]">
                <Image
                  src="/images/fr-stanley-ukasoanya2.webp"
                  alt="Reverend Father Stanley Ukasoanya"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-5 py-14 sm:p-20">
        <div className="flex flex-col items-center justify-center max-w-3xl m-auto">
          <h1 className="text-[#bd873c] text-center font-bold text-3xl lg:text-4xl  font-serif mb-10 ">
            Objectives
          </h1>

          <p className="font-semibold">
            The Rev. Fr. Stanley Ukasoanya Foundation is guided by three core
            objectives:
          </p>
        </div>

        {/* Carousel */}
        <AboutCarousel />
      </section>
    </div>
  );
}

export default About;
