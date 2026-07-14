import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, company, email, country, product, volume, message } = req.body;

  try {
    // Zoho uses smtp.zoho.in for Indian accounts, or smtp.zoho.com for global accounts
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in", 
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Kaventra Website" <${process.env.ZOHO_EMAIL}>`,
      replyTo: email,
      to: process.env.ZOHO_EMAIL, // Send it to yourself
      subject: `New Website Lead: ${product} (${volume}) from ${company}`,
      text: `
Name: ${name}
Company: ${company}
Email: ${email}
Country: ${country}
Product: ${product}
Volume: ${volume}

Message:
${message || "No message provided."}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
