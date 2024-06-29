'use client';

import React, { useState } from 'react';
import { countryPhoneCodes as countryCodes } from '@/constants';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

type Props = {};

const ContactForm = (props: Props) => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+234',
    phoneNumber: '',
    subject: 'I have a question about the foundation',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('Sending ...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const { success } = await res.json();

    if (success) {
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        countryCode: '',
        phoneNumber: '',
        subject: '',
        message: '',
      });

      toast({
        description: 'Your message has been sent.',
      });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="hidden">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name *"
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="hidden">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email *"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="flex space-x-2 max-w-sm">
          <div className="flex-2">
            <label htmlFor="countryCode" className="hidden">
              CountryCode
            </label>

            <select
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.dial_code}>
                  {country.dial_code}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label htmlFor="phoneNumber" className="hidden">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Telephone *"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-gray-700"
          >
            How can we help? *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="I have a question about the foundation">
              I have a question about the foundation
            </option>
            <option value="I'd like to be a sponsor">
              I&apos;d like to be a sponsor
            </option>
            <option value="I'd like to volunteer">
              I&apos;d like to volunteer
            </option>
            <option value="I'd like to give a donation">
              I&apos;d like to give a donation
            </option>
            <option value="Other">Other ...</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="hidden">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message *"
            required
            rows={6}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <Button type="submit" className="px-10">
          {status === 'Sending ...' ? status : 'Send'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
