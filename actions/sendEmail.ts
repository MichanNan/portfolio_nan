"use server";

import ContactFormEmail from "@/components/ContactFormEmail";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.REDEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  if (!senderEmail || typeof senderEmail !== "string") {
    return { error: "inValid sender email!" };
  }
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "caonanla@gmail.com",
    subject: "Message from contact form",
    reply_to: senderEmail,
    react: React.createElement(ContactFormEmail, {
      message: message,
      senderEmail: senderEmail,
    }),
  });
};
