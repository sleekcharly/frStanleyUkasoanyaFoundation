import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

type Props = {};

const SocialMedia = (props: Props) => {
  return (
    <div>
      <h3 className="font-thin">Follow us on Social Media</h3>
      <div className="flex items-center justify-center space-x-6 mt-2 ">
        <a href="https://www.facebook.com/frStanleyFdn/" target="_blank">
          <FaFacebook className="w-6 h-6" />
        </a>
        <a href="https://x.com/frStanleyFdn" target="_blank">
          <FaX className="w-6 h-6 " />
        </a>
        <a
          href="https://www.linkedin.com/company/fr-stanley-fdn"
          target="_blank"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/fr_stanley_fdn/" target="_blank">
          <FaInstagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
