import React from "react";
import { faqs } from "../assets/imageLinks";

export default function FAQ() {
  return (
    <section name="FAQ" className="py-12 bg-gray-200 md:px-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-center mb-8">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-md font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-500 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
