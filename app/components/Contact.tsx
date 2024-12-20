"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:shresthaprija123@gmail.com?subject=${formData.subject}& body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})`);

  return (
    <div className="h-screen flex flex-col relative text-center max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 mb-10 text-2xl">
        Contact
      </h3>

      <div className="w-full max-w-3xl space-y-8 mt-20 ">
        <h4 className="text-2xl font-medium sm:text-base dark:text-gray-300">
          Let’s work together! Fill out the form and I’ll get back to you.
        </h4>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full rounded-xl border p-8 shadow-lg" // Added border, padding, and rounded-xl class
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="contactInput w-full rounded-xl"
          />
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="contactInput w-full rounded-xl"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="contactInput w-full rounded-xl"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput w-full rounded-xl"
          />

          <div className="flex justify-center mt-4">
            <button className="dark:bg-white bg-gray-400 text-zinc-900 font-semibold border py-3 px-6 rounded-full dark:hover:bg-orange-700 hover:bg-orange-700 transition-colors duration-300 sm:text-sm w-28 text-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
