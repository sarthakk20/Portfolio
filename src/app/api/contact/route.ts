import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {

    try {

        const { name, email, message } = await req.json();

        await resend.emails.send({

            from: "Portfolio <onboarding@resend.dev>",

            to: process.env.MY_EMAIL!,

            subject: `New Message from ${name}`,

            html: `
                <h2>New Portfolio Contact</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>
            `

        });

        return Response.json({
            success: true
        });

    } catch (err) {

        return Response.json({
            success: false,
            message: err instanceof Error ? err.message : "An unexpected error occurred"
        });

    }

}