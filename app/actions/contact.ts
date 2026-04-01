"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(formData: FormData): Promise<void> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const timeline = formData.get("timeline") as string;
  const details = formData.get("details") as string;

  if (!name || !email || !details) {
    return;
  }

  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "faisalaqdas@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name} — ${service || "General"}`,
    html: `
      <h2>New Portfolio Contact</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service:</strong> ${service || "Not specified"}</p>
      <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
      <hr />
      <p><strong>Project Details:</strong></p>
      <p>${details.replace(/\n/g, "<br />")}</p>
    `,
  });
}
