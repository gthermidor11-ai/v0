import { NextResponse } from "next/server"
import { resend } from "@/lib/resend"

const CADD_EMAIL = "cadeveloppementdurable@gmail.com"
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "CADD <onboarding@resend.dev>"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type, name, email, message, ...otherData } = body

    // Build email content based on form type
    let subject = ""
    let htmlContent = ""

    switch (type) {
      case "contact":
        subject = `[CADD] Nouveau message de contact - ${name}`
        htmlContent = `
          <h2>Nouveau message de contact reçu sur le site CADD</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `
        break

      case "volunteer":
        subject = `[CADD] Nouvelle candidature bénévole - ${name}`
        htmlContent = `
          <h2>Nouvelle candidature de bénévole</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${otherData.phone || "Non spécifié"}</p>
          <p><strong>Disponibilités:</strong> ${otherData.availability || "Non spécifié"}</p>
          <h3>Intérêts:</h3>
          <p>${Array.isArray(otherData.interests) ? otherData.interests.join(", ") : otherData.interests || "Non spécifié"}</p>
        `
        break

      default:
        subject = `[CADD] Nouveau formulaire soumis`
        htmlContent = `<pre>${JSON.stringify(body, null, 2)}</pre>`
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CADD_EMAIL,
      replyTo: email,
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            h2 { color: #3BC48B; }
            h3 { color: #555; margin-top: 20px; }
            strong { color: #000; }
          </style>
        </head>
        <body>
          ${htmlContent}
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;">
          <p style="color: #888; font-size: 12px;">
            Ce message a été envoyé depuis le site web CADD.
          </p>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        {
          success: false,
          error: "Erreur lors de l'envoi du courriel",
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Formulaire reçu et courriel envoyé avec succès",
      emailId: data?.id,
    })
  } catch (error) {
    console.error("Error processing form:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Erreur lors du traitement du formulaire",
      },
      { status: 500 },
    )
  }
}
