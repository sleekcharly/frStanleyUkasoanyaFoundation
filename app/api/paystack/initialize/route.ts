// Paystack initialization code

import { NextResponse } from 'next/server';
import https from 'https';

/**
 * Handles POST requests to initialize a Paystack transaction.
 *
 * This API route is used to initialize a payment transaction with Paystack.
 * The client must send the email and amount in the request body.
 *
 * @param {Request} req - The incoming request object containing the email and amount in the body.
 * @returns {Promise<NextResponse>} - A JSON response containing the Paystack API response or an error message.
 */

export async function POST(req: Request) {
  // current time
  const currentTime = Date.now();

  // Unique transaction reference
  const ref = `fr-stanley-fdn-donate-${currentTime}-${
    Math.floor(Math.random() * 1000000000000) + 1
  }`;
  console.log(ref);

  try {
    // Parse the request body to extract email and amount.
    const body = await req.json();
    const params = JSON.stringify({
      email: body.email, // Customer's email address
      amount: body.amount * 100, // Transaction amount in kobo (smallest currency unit)
      reference: ref,
      callback_url: 'https://frstanleyfdn.org/donation_success',
    });

    // Configure the options for the HTTPS request to the Paystack API.
    const options = {
      hostname: 'api.paystack.co', // Paystack API host
      port: 443, // HTTPS port
      path: '/transaction/initialize', // Endpoint for initializing a transaction
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, // Authorization header with secret key
      },
    };

    // Make the HTTPS request to the Paystack API and handle the response
    const data = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = '';

        // Collect data chunks as they arrive.
        res.on('data', (chunk) => {
          data += chunk;
        });

        // Resolve the promise with the parsed response data once the response ends.
        res.on('end', () => {
          console.log(JSON.parse(data));
          resolve(JSON.parse(data));
        });
      });

      // Handle any errors that occur during the request.
      req.on('error', (error) => {
        console.error(error);
        reject(error);
      });

      // Write the request body and send the request.
      req.write(params);
      req.end();
    });

    // Return the response data from the Paystack API as a JSON response.
    const responseData = { currentTime, data };
    return NextResponse.json(responseData);
  } catch (error) {
    // Log the error to the console and return a 500 error response.
    console.error(error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
