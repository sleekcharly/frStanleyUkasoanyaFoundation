import { contactEmails, phoneNumbers } from '@/lib/types/footer.types';
import React from 'react';

type Props = {
  emails: contactEmails[];
  numbers: phoneNumbers[];
};

const Contact = ({ emails, numbers }: Props) => {
  return (
    <div className="w-[250px] md:w-full overflow-hidden">
      <h2 className="mb-3 font-thin">Contact</h2>
      <h3 className="font-semibold text-sm">Telephone</h3>
      <address className="mt-2 text-sm">
        {numbers.map((number) => (
          <p key={number.label} className="text-gray-500">
            +{number.number}{' '}
            <span className="text-gray-200"> - {number.label}</span>
          </p>
        ))}
      </address>

      <h3 className="mt-3 font-semibold text-sm">Email</h3>
      <address className="mt-2">
        {emails.map((email) => (
          <a
            href={`mailto:${email.email}`}
            key={email.label}
            className="text-gray-500 break-words"
          >
            {email.email}
          </a>
        ))}
      </address>
    </div>
  );
};

export default Contact;
