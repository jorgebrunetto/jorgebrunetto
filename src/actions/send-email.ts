"use server"

import { SendMailFormValues } from "@/components/contact-form"
import { ErrorResponse, Resend } from "resend"

export async function sendEmail(formData: SendMailFormValues) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)

        const name = formData.name as string
        const email = formData.email as string
        const message = formData.message as string

        if (!email || !message) {
            return { error: "All fields are required" }
        }

        if (!process.env.RESEND_TO_EMAIL_ADDRESS) {
            return { error: "Missing environment variable: RESEND_TO_EMAIL_ADDRESS" }
        }

        await resend.emails.send({
            from: "Site Jorge Brunetto <onboarding@resend.dev>",
            to: process.env.RESEND_TO_EMAIL_ADDRESS,
            subject: "Novo contato do site",
            text: `
        Novo contato do site:
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
        })

        return { success: "Email sent successfully" }
    } catch (error: ErrorResponse | any) {
        if ('message' in error && error.message.includes('Missing API key')) {
            return { error: "Missing environment variable: RESEND_API_KEY" }
        }
        return { error: error.message ?? "Failed to send email" }
    }
}
