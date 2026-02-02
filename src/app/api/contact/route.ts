import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, budget, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('Resend API key not configured - skipping email');
      return NextResponse.json({ success: true, message: 'Form received (email disabled)' });
    }

    // Initialize Resend lazily (only when API is called)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: 'Estate Hive <onboarding@resend.dev>',
      to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com',
      subject: `New Lead: ${name} - Estate Hive`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No message'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
