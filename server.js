// server.js
import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Use the API key from your .env (never hard-code it)
const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <no-reply@hub29.online>", // verified domain in Resend
      to: "raghulse29@gmail.com", // your inbox – always receives the form
      reply_to: email, // the visitor’s email
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error(error);
      return res.status(400).json({ error: "Resend error" });
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
