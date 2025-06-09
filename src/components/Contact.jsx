// app/components/ContactBody.tsx

import { useState } from "react";
import { toast } from "react-toastify";


export default function ContactBody() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: !value.trim() }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      setStatus("error");
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="w-full px-6 md:px-24 py-20 font-neue text-[#1a1a1a] bg-white">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-agp-db">Let’s Connect</h2>
          <p className="text-agp-gray text-md md:text-lg">
            Whether you have a question, project idea, or just want to say hello — we’d love to hear from you.
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="flex flex-col md:flex-row gap-10">

          {/* Contact Info */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-agp-db">Our Office</h3>
              <p className="text-agp-gray">Biyem Assi Ave, Beside Camtel,<br /> Yaounde, CM</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-agp-db">Call Us</h3>
              <p className="text-agp-gray">+237 671-368-909</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-agp-db">Email</h3>
              <p className="text-agp-gray">contact@trustconsulting.tech</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-[#f9f9f9] p-6 md:p-10 rounded-2xl space-y-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`p-4 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-pblue w-full`}
                  required
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">First name is required</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={`p-4 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-pblue w-full`}
                  required
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">Last name is required</p>}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`p-4 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-pblue w-full`}
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">Valid email is required</p>}
            </div>

            <div>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`p-4 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-pblue w-full`}
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">Message is required</p>}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-pblue hover:bg-agp-db transition-all text-white px-6 py-3 rounded-xl font-medium"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>

        {/* Map Embed */}
        <div className="w-full rounded-2xl overflow-hidden shadow">
          <iframe
            title="Agency Location"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-[400px] border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
