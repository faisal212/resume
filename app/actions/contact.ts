"use server";

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

  // Log for now — replace with email service or database later
  console.log("Contact form submission:", {
    name,
    email,
    phone,
    service,
    timeline,
    details,
  });
}
