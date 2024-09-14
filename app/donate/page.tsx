import Image from 'next/image';
import PriestFormation from '/public/images/priest-formation6.webp';
import Payment from '@/components/donation/payment';

const Donate = () => {
  return (
    <div>
      <div className="relative w-full h-screen lg:h-[500px]">
        <Image
          src={PriestFormation}
          alt="Priest formation for Rev. Fr. Stanley Ukasoanya Foundation"
          fill
          sizes="100vw"
          className="object-cover grayscale opacity-90"
        />
        <div className="flex flex-col items-center justify-center absolute inset-0 m-auto p-2 lg:p-0 w-full lg:w-1/2 h-1/2">
          <h3 className="font-semibold text-white text-lg md:text-2xl ">
            Donate Now | Every penny counts
          </h3>
          <h2 className="font-bold  text-5xl lg:text-5xl xl:text-6xl text-center text-white">
            All proceeds help achieve our causes
          </h2>
        </div>
      </div>

      <section className="relative bg-gray-800 mx-4 md:mx-8 max-w-5xl lg:mx-auto -mt-28 lg:-mt-32 mb-10 shadow-2xl">
        <Payment />
      </section>
    </div>
  );
};

export default Donate;
