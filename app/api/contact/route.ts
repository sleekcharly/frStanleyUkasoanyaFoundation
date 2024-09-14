import { NextResponse } from 'next/server';
// import { EmailTemplate } from '@/components/Contact/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, countryCode, phoneNumber, subject, message } =
    await request.json();

  if (!name || !email || !subject) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  // Send email using Resend API
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <web@frstanleyfdn.org>`,
      to: 'info@frstanleyfdn.org',
      subject:
        subject && subject === 'Other' ? 'New message from ' + name : subject,
      html: `<div>
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
  </div>`,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { success: false, error: error },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
