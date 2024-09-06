'use client';

import Image from 'next/image';
import PriestFormation from '/public/images/priest-formation6.webp';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/db/firebase';
import CheckMark from '/public/icons/green-check-mark.png';
import Link from 'next/link';

const DonationSuccessContent = () => {
  const searchParams = useSearchParams();

  const ref = searchParams.get('ref');

  const [data, setData] = useState<any>({});

  useEffect(() => {
    if (ref) {
      // async function to get the document
      const fetchDocument = async () => {
        try {
          const docRef = doc(db, 'transactions', ref); // reference to document
          const docSnap = await getDoc(docRef); // Fetch document snapshot

          if (docSnap.exists()) {
            setData(docSnap.data());
          } else {
            console.log('No such document!');
          }
        } catch (err) {
          console.error('Error fetching document:', err);
        }
      };

      // Call function
      fetchDocument();
    }
  }, [ref]);

  return (
    <div>
      <div className="relative w-full h-screen lg:h-[500px]">
        <Image
          src={PriestFormation}
          alt="Priest formation for Rev. Fr. Stanley Ukasoanya Foundation"
          fill
          className="object-cover grayscale opacity-90"
        />
        <section className="flex flex-col items-center justify-center gap-5 bg-green-50 absolute inset-0 m-auto p-2 lg:p-5 w-full max-w-2xl lg:w-1/2 h-3/4 lg:h-[90%]">
          <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] z-10">
            <Image
              src={CheckMark}
              alt="Donation check mark"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <h2 className="font-semibold text-xl lg:text-2xl">
              Thank you <span className="font-bold">{data?.fullName}</span>
            </h2>
            <h3 className="text-lg text-center">
              You donation will help actualize our Mission and Objectives
            </h3>
          </div>

          <p className="max-w-xs text-wrap text-center">
            We&apos;ve sent your donation receipt to {data?.email}
          </p>

          <Link href="/" className="w-[90px] h-[90px] relative">
            <Image
              src="/icons/logo-image-only.png"
              alt="Fr Stanley Ukasoanya FOundation logo"
              fill
            />
          </Link>
        </section>
      </div>
    </div>
  );
};

// main DonationSuccess component with Suspense
const DonationSuccess = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DonationSuccessContent />
  </Suspense>
);

export default DonationSuccess;
