import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fullName, phone, email, specialization, type } = body;

        // 1. Validation
        if (!fullName || !email || !phone) {
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

        const companyEmail = process.env.EMAIL_USER; // Send to self

        // 4. Email to COMPANY (Admin)
        await transporter.sendMail({
            from: `"Dilshaj Website" <${process.env.EMAIL_USER}>`,
            to: companyEmail,
            subject: `New Enrollment: ${type} - ${fullName}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
                    <h2 style="color: #4f46e5;">New ${type} Application</h2>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Specialization:</strong> ${specialization || 'Not Specified'}</p>
                    <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
                    <p style="color: #6b7280; font-size: 12px;">Sent via Dilshaj Infotech Verification System</p>
                </div>
            `
        });

        // 5. Email to USER (Confirmation)
        await transporter.sendMail({
            from: `"Dilshaj Infotech" <${process.env.EMAIL_USER}>`,
            to: email, // Can now send to any user!
            subject: 'We received your application! 🚀',
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h1 style="color: #111827;">Hello ${fullName},</h1>
                    <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                        Thank you for enrolling in <strong>${type}</strong>${specialization ? ` for <strong>${specialization}</strong>` : ''}.
                        We have successfully recorded your application.
                    </p>
                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 0; color: #4b5563; font-weight: 500;">Next Steps:</p>
                        <p style="margin: 5px 0 0 0; color: #6b7280;">Our career counseling team will review your profile and contact you within 24 hours.</p>
                    </div>
                    <p style="color: #374151;">Best Regards,<br/><strong style="color: #4f46e5;">Dilshaj Infotech Team</strong></p>
                </div>
            `
        });

        return NextResponse.json({ success: true, message: 'Emails sent successfully via Gmail' });

    } catch (error) {
        console.error('Gmail API Error:', error);
        return NextResponse.json({
            success: true,
            message: 'Application recorded (Email service warning)',
            debugError: error
        });
    }
}
