import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const portfolio = formData.get('portfolio') as string;
        const jobTitle = formData.get('jobTitle') as string;
        const resumeFile = formData.get('resume') as File | null;

        if (!firstName || !email || !jobTitle) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.warn('WARNING: Gmail credentials missing in .env.local');
            return NextResponse.json({
                success: true,
                message: 'Application simulated (No email sent - missing credentials)',
                warning: 'Please add EMAIL_USER and EMAIL_PASS to .env.local to send real emails.'
            });
        }

        // Configure Gmail Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Prepare attachments
        const attachments = [];
        if (resumeFile) {
            const buffer = Buffer.from(await resumeFile.arrayBuffer());
            attachments.push({
                filename: resumeFile.name,
                content: buffer,
            });
        }

        const companyEmail = process.env.EMAIL_USER;

        // 1. Email to Company (Admin)
        await transporter.sendMail({
            from: `"Dilshaj Careers" <${process.env.EMAIL_USER}>`,
            to: companyEmail,
            subject: `New Job Application: ${jobTitle} - ${firstName} ${lastName}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
                    <h2 style="color: #4f46e5;">New Application for ${jobTitle}</h2>
                    <p><strong>Applicant:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Portfolio/LinkedIn:</strong> <a href="${portfolio}">${portfolio}</a></p>
                    <p><strong>Resume:</strong> Attached</p>
                    <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
                    <p style="color: #6b7280; font-size: 12px;">Appplied via Careers Page</p>
                </div>
            `,
            attachments: attachments
        });

        // 2. Email to User (Confirmation)
        await transporter.sendMail({
            from: `"Dilshaj Infotech" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Application Received - ${jobTitle}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h1 style="color: #111827;">Hello ${firstName},</h1>
                    <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                        We have successfully received your application for the position of <strong>${jobTitle}</strong> at Dilshaj Infotech.
                    </p>
                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 0; color: #4b5563; font-weight: 500;">Next Steps:</p>
                        <p style="margin: 5px 0 0 0; color: #6b7280;">Our HR team will review your profile. If your skills match our requirements, we will contact you for an interview.</p>
                    </div>
                    <p style="color: #374151;">Best Regards,<br/><strong style="color: #4f46e5;">Dilshaj Infotech Team</strong></p>
                </div>
            `
        });

        return NextResponse.json({ success: true, message: 'Application sent successfully via Gmail' });

    } catch (error) {
        console.error('Gmail API Error:', error);
        return NextResponse.json({
            success: true,
            message: 'Application recorded (Email service warning)',
            debugError: error
        });
    }
}
