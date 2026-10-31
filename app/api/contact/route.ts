import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_DESTINATION_EMAIL = "deutschland.iptv.support@gmail.com";
const CONTACT_SENDER_EMAIL = "onboarding@resend.dev";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Bitte füllen Sie alle Felder aus." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Contact form error: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Der Nachrichtendienst ist derzeit nicht verfügbar." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_SENDER_EMAIL,
      to: CONTACT_DESTINATION_EMAIL,
      replyTo: email,
      subject: `Kontaktformular: ${subject}`,
      text: `Neue Kontaktanfrage von der Website\n\nName: ${name}\nE-Mail: ${email}\nBetreff: ${subject}\n\nNachricht:\n${message}`,
      html: `
        <h2>Neue Kontaktanfrage von der Website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Betreff:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
