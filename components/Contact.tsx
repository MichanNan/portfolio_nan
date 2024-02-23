"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { useSectionInView } from "@/hooks/useSectionInView";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.3);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    const formData = new FormData(event.target as HTMLFormElement);
    await sendEmail(formData);
    setPending(false);
    toast.success("Message sent successfully!");
    const form = event.target as HTMLFormElement;
    form.reset();
  };
  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionTitle title="Contact" />
      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <label htmlFor="senderEmail"></label>
        <input
          type="text"
          name="senderEmail"
          className="h-14 rounded-lg border-[1px] border-gray-300 px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          required
          maxLength={50}
        />
        <label htmlFor="message"></label>
        <textarea
          className="h-52 my-3 rounded-lg border-[1px] border-gray-300 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Yout message"
          required
          maxLength={500}
        />
        <button
          disabled={pending}
          type="submit"
          className={` rounded-full  h-[3rem] w-[8rem] ${
            pending ? "text-gray-200 bg-gray-500" : "text-white bg-black"
          }`}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
