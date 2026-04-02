import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import useScrollReveal, { scrollRevealClass } from "../hooks/useScrollReveal";
import ContactForm from "./ContactForm/ContactForm";

export const Contact = () => {
  const [isVisible, ref] = useScrollReveal({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`text-white py-12 md:py-16 ${scrollRevealClass} ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
      id="contact"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2> */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold bg-clip-text text-gray-100 mb-4">
              Let&apos;s Talk
            </h3>

            <div className="mb-4 mt-4 ">
              <FaEnvelope className="inline-block  text-gray-100] mr-2" />
              <span>thomsondtech@gmail.com</span>
            </div>
            <div className="mb-4 ">
              <FaPhone className="inline-block  text-gray-100 mr-2" />
              <span>(346) 297-0003</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
