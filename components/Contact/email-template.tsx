import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  countryCode,
  phoneNumber,
  message,
}) => (
  <div>
    <p>You have a new contact form submission</p>
    <p>
      <strong>Name: </strong> ${name}
    </p>
    <p>
      <strong>Email: </strong> ${email}
    </p>
    <p>
      <strong>Phone Number: </strong> ${countryCode} ${phoneNumber}
    </p>
    <p>
      <strong>Message: </strong> ${message}
    </p>
  </div>
);
