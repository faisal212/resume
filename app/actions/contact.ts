"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(
  _prevState: { success: boolean; message: string } | null,
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;
  const budget = formData.get("budget") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "faisalaqdas@gmail.com",
      replyTo: email,
      subject: `New inquiry from ${name} — ${role || "General"}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role type:</strong> ${role || "Not specified"}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <hr />
        <p><strong>What they're building:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });
    return { success: true, message: "Message sent! I'll get back to you soon." };
  } catch {
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
