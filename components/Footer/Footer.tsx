import React from 'react';
import Address from './Address';
import Contact from './Contact';
import SocialMedia from './SocialMedia';
import { emails, phoneNumbers } from '@/constants';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gray-950 text-gray-200">
      <div className="flex flex-col lg:flex-row md:space-x-10 lg:space-x-20 justify-center items-baseline p-10 ml-4 mr-4 space-y-20">
        {/* Foundation Address */}
        <div>
          <Address />
        </div>

        {/* Contact */}
        <div>
          <Contact emails={emails} numbers={phoneNumbers} />
        </div>

        {/* Social media */}
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Footer;
