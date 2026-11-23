import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export const Contact: React.FC = () => {
  // 1. Define the target WhatsApp number (must include country code, e.g., 91 for India)
  const WHATSAPP_NUMBER = "+919744117995";
  const WHATSAPP_NUMBER2 = "+918921892816";

  // 2. State to capture form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "Sales Inquiry / Quote",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // 3. WhatsApp Submission Handler
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop default form submission

    // Construct the message text
    const message =
      `*VBreeze Contact Form Inquiry*\n` +
      `\n*Name:* ${formData.name}` +
      `\n*Phone:* ${formData.phone}` +
      `\n*Email:* ${formData.email}` +
      `\n*Inquiry Type:* ${formData.inquiry}` +
      `\n*Message:* ${formData.message}`;

    // Encode the message and build the WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodedMessage}`;

    // Redirect the user
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-24 bg-white text-slate-900">
      {/* HEADER */}
      <div className="container mx-auto px-6 text-center max-w-4xl mb-16">
        <h2
          className="text-sm uppercase font-bold text-sky-600 tracking-widest"
          data-aos="fade-down"
        >
          Get In Touch
        </h2>
        <h3
          className="text-4xl md:text-5xl font-extrabold mt-2"
          data-aos="fade-down"
        >
          Let's Start Your Airflow Project
        </h3>
        <p
          className="text-gray-600 text-lg max-w-2xl mx-auto mt-4"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Have a question, need support, or ready for a free site assessment?
          Send us a WhatsApp!
        </p>
      </div>

      {/* 🚀 SPLIT CONTACT LAYOUT (DETAILS | FORM) */}
      <div className="container mx-auto px-3">
        <div className="grid lg:grid-cols-3 gap-12 bg-slate-50 rounded-3xl shadow-2xl overflow-hidden p-0">
          {/* LEFT COLUMN: CONTACT DETAILS & MAP (Stylized Sidebar) */}
          <div
            className="lg:col-span-1 bg-sky-600 text-white p-4 md:p-12 space-y-8 flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div>
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>

              {/* Phone (Using WHATSAPP_NUMBER for consistency) */}
              <div className="flex items-start mb-4">
                <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="font-semibold">Phone (WhatsApp)</p>
                  <a
                    href={`tel:${WHATSAPP_NUMBER2}`}
                    className="text-sky-100 hover:text-white transition break-words"
                  >
                  Deon Joseph :   {WHATSAPP_NUMBER2} <br /> (Site Engineer)
                  </a>
                   <a
                    href={`tel:${WHATSAPP_NUMBER}`}
                    className="text-sky-100 hover:text-white transition break-words"
                  >
                  HQ:   {WHATSAPP_NUMBER}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start mb-4">
                <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:support@vbreezefans.com"
                    className="text-sky-100 hover:text-white transition break-words"
                  >
                    vbreezefans@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start mb-6">
                <Clock className="h-5 w-5 flex-shrink-0 mr-3 mt-1" />
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-sky-100">Mon–Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <MapPin className="h-5 w-5 flex-shrink-0 mr-3 mt-1" />
                <div>
                  <p className="font-semibold">Head Office</p>
                  <p className="text-sky-100">
                    VBreeze Fans, Perumbavoor, Ernakulam, Kerala
                  </p>
                </div>
              </div>
            </div>

            {/* MAP Placeholder */}
            <div className="h-48 rounded-lg overflow-hidden mt-6 shadow-lg border-2 border-sky-400">
              <iframe
                title="VBreeze Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.920146900031!2d76.4826775!3d10.105622300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e348c5648cef%3A0x3ee4ac5ff5578ee!2sErnakulam%20engineering!5e0!3m2!1sen!2sin!4v1763892516080!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div
            className="lg:col-span-2 bg-white p-4 md:p-12"
            data-aos="fade-left"
          >
            <h4 className="text-3xl font-bold mb-8">
              Send Us a WhatsApp Message
            </h4>

            {/* 4. ATTACH THE SUBMIT HANDLER */}
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-sky-600 outline-none"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-sky-600 outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Phone and Subject/Type */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Phone (for best support)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-sky-600 outline-none"
                    placeholder="Mobile Number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="inquiry"
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Type of Inquiry
                  </label>
                  <select
                    id="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-sky-600 outline-none bg-white"
                  >
                    <option>Sales Inquiry / Quote</option>
                    <option>Technical Support</option>
                    <option>General Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1 text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-sky-600 outline-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* 5. Update Button Text and Icon */}
              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-3 rounded-lg font-semibold hover:bg-sky-700 transition transform hover:scale-[1.005] flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send WhatsApp Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
