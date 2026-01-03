import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // 1. Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 2. Check Configuration (Fail-safe for Demo)
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.warn('WARNING: Gmail credentials missing in .env.local');
            return NextResponse.json({
                success: true,
                message: 'Application simulated (No email sent - missing credentials)',
                warning: 'Please add EMAIL_USER and EMAIL_PASS to .env.local to send real emails.'
            });
        }

        // 3. Configure Gmail Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const companyEmail = process.env.EMAIL_USER;

        // 4. Send Email to Founder (Admin)
        await transporter.sendMail({
            from: `"Dilshaj Website" <${process.env.EMAIL_USER}>`,
            to: companyEmail,
            subject: `New Message for Founder: ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
                    <h2 style="color: #4f46e5;">New Message from Founder's Text</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background: #f9fafb; padding: 15px; border-radius: 5px; color: #374151;">${message}</p>
                    <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
                    <p style="color: #6b7280; font-size: 12px;">Sent via Dilshaj Infotech Website</p>
                </div>
            `
        });

        // 5. Send Auto-Reply to USER
        await transporter.sendMail({
            from: `"Dilshaj Infotech" <${process.env.EMAIL_USER}>`,
            to: email, // Can send to any user!
            subject: 'Thank you for contacting Dilshaj Infotech! 🚀',
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h1 style="color: #111827;">Hello ${name},</h1>
                    <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                        Thank you for reaching out to us. We have received your message and appreciate your interest in Dilshaj Infotech.
                    </p>
                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 0; color: #4b5563; font-weight: 500;">Your Message:</p>
                        <p style="margin: 5px 0 0 0; color: #6b7280; font-style: italic;">"${message}"</p>
                    </div>
                    <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                        Our team will review your inquiry and get back to you shortly.
                    </p>
                    <p style="color: #374151;">Best Regards,<br/><strong style="color: #4f46e5;">Dilshaj Infotech Team</strong></p>
                </div>
            `
        });

        return NextResponse.json({ success: true, message: 'Message sent successfully via Gmail' });

    } catch (error) {
        console.error('Gmail API Error:', error);
        return NextResponse.json({
            success: true,
            message: 'Message simulated (Email service warning)',
            debugError: error
        });
    }
}
