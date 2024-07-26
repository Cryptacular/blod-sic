import { sendEmail } from "@/services/emailService";
import ContactForm from "./ContactForm";
import ResponsiveContainer from "./ResponsiveContainer";
import SocialButtons from "./SocialButtons";

export default function ContactSection() {
  const sendContactRequest = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      throw new Error(
        `Missing required form data: ${JSON.stringify({
          name,
          email,
          message,
        })}`
      );
    }

    await sendEmail({
      name,
      from: email,
      subject: `Contact form submission from ${name}`,
      text: `Contact form submission from ${name}\n\nMessage:\n\n${message}`,
    });
  };

  return (
    <div className="p-4 pt-6 md:p-12 md:pt-20">
      <ResponsiveContainer>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl text-center font-bold">
            <a id="contact" />
            contact
          </h2>

          <div className="flex w-full flex-col lg:flex-row gap-16 items-center justify-around text-left">
            <div className="flex flex-col gap-6 max-w-96">
              <p>
                If you have any questions or enquiries, please send me a message
                and I’ll get back to you as soon as I can!
              </p>
              <p>
                I would also love to collaborate on any projects you might be
                working on that need a memorable soundtrack, especially short
                films and games.
              </p>
              <div className="flex justify-center mt-8">
                <SocialButtons />
              </div>
            </div>

            <ContactForm onSubmit={sendContactRequest} />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
