"use server";

import { Resend } from "resend";

interface EmailProps {
  name: string;
  from: string;
  subject: string;
  text: string;
}

export const sendEmail = async ({ name, from, subject, text }: EmailProps) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const sendEmailResponse = await resend.emails.send({
    from: "info@blodsic.com",
    to: process.env.EMAIL_ADDRESS!,
    reply_to: from,
    subject,
    text,
  });

  if (sendEmailResponse.error) {
    console.error(sendEmailResponse.error);
    throw new Error(sendEmailResponse.error.message);
  }

  const addContactResponse = await resend.contacts.create({
    email: from,
    firstName: name,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });

  if (addContactResponse.error) {
    console.error(addContactResponse.error);
  }
};
