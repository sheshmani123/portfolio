'use server';

import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const {name, email, message} = await req.json();

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Verify the transporter is working
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error('Transporter verify error:', error);
          reject(error);
        } else {
          console.log('Transporter is ready to take messages');
          resolve(success);
        }
      });
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'sheshmanic952@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({message: 'Email sent successfully'}, {status: 200});
  } catch (error: any) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      {message: 'Failed to send email', error: error.message},
      {status: 500}
    );
  }
}
