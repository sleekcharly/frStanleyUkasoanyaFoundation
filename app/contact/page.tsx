'use client';

import GoogleMapComponent from '@/components/Contact/GoogleMapComponent';
import React from 'react';

import HeroImage from '/public/images/image01.jpg';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import ContactForm from '@/components/Contact/ContactForm';
import { APIProvider } from '@vis.gl/react-google-maps';

type Props = {};

const page = (props: Props) => {
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <APIProvider
      apiKey={GOOGLE_MAPS_API_KEY}
      onLoad={() => console.log('Maps API loaded')}
    >
      <div>
        {/* Map with foundation address */}
        <div className="w-full mx-auto">
          <GoogleMapComponent />
        </div>

        {/* Hero section */}
        <div className="mt-14 mb-14 flex flex-col lg:flex-row lg:justify-between lg:pl-4 xl:pl-20 items-center">
          <div className="flex flex-col items-center lg:items-start space-y-4 mb-14">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold font-sans">
              Contact Our Foundation
            </h1>
            <p className="w-[350px] sm:w-[500px] md:w-[600px]  text-center lg:text-start font-sans">
              With a steadfast commitment to promoting Catholic priestly
              formation and strengthening family life, our foundation aims to
              support countless individuals and families. Join us in our mission
              to nurture faith and foster strong, resilient communities, Let us
              help you too.
            </p>
          </div>
          <div className="relative w-[350px] sm:w-[600px] md:w-[750px] lg:w-[700px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
            <Image
              src={HeroImage}
              fill
              alt="Hero Image"
              className="object-cover rounded-2xl lg:rounded-none lg:rounded-s-[50px]"
            />
          </div>
        </div>

        {/* Social media section */}
        <div className="mt-12 bg-gray-200 p-4">
          <div className="text-center w-full flex flex-col items-center mb-10">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold font-sans mb-3">
              Connect with us
            </h2>
            <p className="text-center font-sans max-w-[900px]">
              We are here to support your journey and amplify your voice. Join a
              global community dedicated to promoting Catholic Priestly
              formation and strengthening family life. Together, we can make a
              difference.
            </p>
          </div>

          <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
            <div className="flex flex-col space-y-4">
              <FaFacebook className="w-14 h-14" />
              <p className="font-sans break-words">
                Follow us on Facebook for expert advice, encouragement, and
                inspiration from a community dedicated to promoting Catholic
                Priestly formation and enriching family life
              </p>
              <a href="https://www.facebook.com/frStanleyFdn/" target="_blank">
                <button className="border-2 border-slate-500 px-8 py-2 rounded-full font-semibold hover:bg-gray-300">
                  Like @frStanleyFdn
                </button>
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <FaX className="w-14 h-14" />
              <p className="font-sans">
                Follow us on X for insights, the latest news on Catholic
                priestly formation, family life enrichment, and updates on our
                events, programs and initiatives. Stay connected and join us.
              </p>
              <a href="https://x.com/FrStanleyFdn" target="_blank">
                <button className="border-2 border-slate-500 px-8 py-2 rounded-full font-semibold hover:bg-gray-300">
                  Follow @FrStanleyFdn
                </button>
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <FaLinkedin className="w-14 h-14" />
              <p className="font-sans">
                Connect with us on LinkedIn for insightful discussions on
                Catholic Priestly formation and strengthening family life.
                Explore topics that inspire and support the growth of faith
                communities.
              </p>
              <a
                href="https://www.linkedin.com/company/rev-fr-stanley-ukasoanya-foundation"
                target="_blank"
              >
                <button className="border-2 border-slate-500 px-8 py-2 rounded-full font-semibold hover:bg-gray-300">
                  Connect with us on Linkedin
                </button>
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <FaInstagram className="w-14 h-14" />
              <p className="font-sans">
                Explore our inspiring journey of dedication to Catholic priestly
                formation and the sanctity of family life. Share your own
                stories and experiences with us at @fr_stanley_fdn.
              </p>
              <a
                href="https://www.instagram.com/fr_stanley_fdn/"
                target="_blank"
              >
                <button className="border-2 border-slate-500 px-8 py-2 rounded-full font-semibold hover:bg-gray-300">
                  Follow @fr_stanley_fdn
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </APIProvider>
  );
};

export default page;
