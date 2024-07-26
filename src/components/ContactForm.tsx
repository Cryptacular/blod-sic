"use client";

import { useState } from "react";
import Button from "./Button";
import { CgSpinner } from "react-icons/cg";

interface Props {
  onSubmit: (formData: FormData) => Promise<void>;
}

export default function ContactForm({ onSubmit }: Props) {
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [hasSuccessfullySentMessage, setHasSuccessfullySentMessage] =
    useState(false);
  const [error, setError] = useState<string | null>(null);
  const formFieldClasses = "bg-foreground/90 text-background text-lg p-3";

  const handleSubmit = async (formData: FormData) => {
    setIsSendingMessage(true);
    setError(null);

    try {
      await onSubmit(formData);
      setHasSuccessfullySentMessage(true);
    } catch (e) {
      setError("Oops, something went wrong. Please try again.");
    } finally {
      setIsSendingMessage(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-96">
      {hasSuccessfullySentMessage ? (
        <div className="bg-success text-background p-3">
          Thanks! Keep an eye on your inbox and I&rsquo;ll be in touch soon.{" "}
        </div>
      ) : (
        <form className="flex flex-col items-stretch justify-center gap-4">
          {error ? <div className="bg-error p-3">{error}</div> : null}

          <label htmlFor="name" className="sr-only">
            name
          </label>
          <input
            type="text"
            placeholder="your name"
            className={formFieldClasses}
            name="name"
            required
          />

          <label htmlFor="email" className="sr-only">
            email
          </label>
          <input
            type="email"
            placeholder="your email"
            className={formFieldClasses}
            name="email"
            required
          />

          <label htmlFor="message" className="sr-only">
            name
          </label>
          <textarea
            placeholder="your message"
            className={formFieldClasses}
            name="message"
            required
          />

          <Button
            type="submit"
            disabled={isSendingMessage}
            variant="light"
            formAction={handleSubmit}
          >
            {isSendingMessage ? (
              <span className="flex items-center justify-center">
                <CgSpinner className="animate-spin" />
              </span>
            ) : (
              "send"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
