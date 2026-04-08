import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required' });
  }

  try {
    await resend.emails.send({
      from:    'WeatherMaster Contact Form <onboarding@resend.dev>',
      to:      'info@weathermasterroofingnw.com',
      replyTo: email,
      subject: `New Roofing Inquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#8f2d96;border-bottom:2px solid #8f2d96;padding-bottom:8px;">
            New Contact Form Submission
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px;background:#f5f5f5;font-weight:bold;width:140px;">Name</td>
              <td style="padding:10px;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold;">Phone</td>
              <td style="padding:10px;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding:10px;background:#f5f5f5;font-weight:bold;">Email</td>
              <td style="padding:10px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold;">Service</td>
              <td style="padding:10px;">${service || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding:10px;background:#f5f5f5;font-weight:bold;">Message</td>
              <td style="padding:10px;">${message || 'No message provided'}</td>
            </tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#f0e8f1;border-left:4px solid #8f2d96;">
            <strong>Reply directly to this email</strong> to respond to ${name}.
          </div>
          <p style="color:#888;font-size:12px;margin-top:16px;">
            Sent from weathermasterroofingnw.com contact form
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
