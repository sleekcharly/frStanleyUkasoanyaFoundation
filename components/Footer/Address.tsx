import Link from 'next/link';
import React from 'react';

type Props = {};

const Address = (props: Props) => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-[#E799DD]">
        Rev. Fr.
        <br /> Stanley Ukasoanya Foundation
      </h2>

      <address>
        58B Awoniyi Elemo Street
        <br />
        Ajao Estate
        <br />
        Lagos, Nigeria.
        <br />
      </address>

      <Link href="/" className="text-gray-500">
        Privacy Policy
      </Link>
    </div>
  );
};

export default Address;
