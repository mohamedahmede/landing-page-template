"use client";

import { Formik, Form } from "formik";
import {
  contactSchema,
  ContactValues,
} from "@/app/utils/validation/contactSchema";
import CustomButton from "../../reusable/buttons/CustomButton";
import TextArea from "../../reusable/form/TextArea";
import TextInput from "../../reusable/form/TextInput";
import Image from "next/image";
import BackgroundCircle from "../../reusable/icons/BackgroundCircle";

const GetInTouch = () => {
  const initialValues: ContactValues = { email: "", name: "", message: "" };

  return (
    <section className="relative overflow-hidden pt-4 xl:pt-[18.19rem] pb-28 xl:pb-[4.95rem] bg-black text-white">
      <div className="sm:flex sm:flex-row items-center gap-[4.27rem] px-4 sm:px-8 xl:ps-[8.13rem] xl:pe-[12.62rem]">
        {/* Left: sphere + background circles */}
        <div className="absolute sm:-top-[-50%] translate-y-1/2 sm:top-[unset] sm:translate-y-0 left-0 sm:relative aspect-square w-[20rem] lg:w-[33.54263rem]">
          {/* --- Background Circles --- */}
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden sm:block">
            <BackgroundCircle className="absolute left-[20%] top-[-50%] lg:top-[-10%] w-16 h-16" />
            <BackgroundCircle className="absolute right-[5%] top-[150%] lg:top-[95%] w-24 h-24" />
          </div>

          {/* existing tiny glow blobs */}
          <div className="pointer-events-none absolute left-4 top-6 size-24 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-6 right-8 size-28 rounded-full bg-white/10 blur-3xl" />

          {/* rotating world sphere */}
          <Image
            src="/images/world-sphere.svg"
            alt=""
            fill
            priority
            sizes="(min-width:1024px) 28rem, 60vw"
            className="select-none opacity-35 object-contain animate-spin-slow relative z-10"
          />
        </div>

        {/* Right: copy + form */}
        <div className="flex items-center">
          <div className="w-full max-w-xl">
            <h2 className="capitalize">Get in touch</h2>
            <p className="md:w-[31.4375rem]">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </p>

            <div className="pt-7 w-full md:w-[25.5rem] 2xl:w-[40rem]">
              <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                  try {
                    await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(values),
                    });
                    resetForm();
                  } finally {
                    setSubmitting(false);
                  }
                }}
                validateOnBlur
                validateOnChange={false}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-[1.12rem]">
                    <TextInput
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                    <TextInput name="name" placeholder="John Doe" />
                    <TextArea
                      name="message"
                      placeholder="How can we help?"
                      rows={5}
                    />

                    <div className="pt-2">
                      <CustomButton
                        type="submit"
                        disabled={isSubmitting}
                        title={isSubmitting ? "Sending…" : "Get in Touch"}
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
