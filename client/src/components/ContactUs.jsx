import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setStatus(res.data.message);
      setFormData({ fullName: "", email: "", message: "" });
    } catch (err) {
      setStatus(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Contact Info
          </h2>

          <div className="text-gray-300 space-y-2">
            <p><span className="font-semibold text-white">Name:</span> Shohaab Aslam</p>
            <p><span className="font-semibold text-white">Email:</span> shohaabaslam@gmail.com</p>
            <p><span className="font-semibold text-white">Phone:</span> +92 342 8630940</p>
            
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold">Social Links</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Shohaab"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.2 1.8 1.2 1.04 1.8 2.74 1.28 3.41.98.1-.75.4-1.28.73-1.57-2.55-.3-5.24-1.28-5.24-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.5.11-3.12 0 0 .98-.31 3.2 1.18a11.1 11.1 0 015.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.62.23 2.82.11 3.12.75.8 1.2 1.82 1.2 3.07 0 4.41-2.7 5.38-5.27 5.67.41.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56A11.52 11.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/shohaab-aslam-b33211279"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0A66C2] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.1 108 0 83.9 0 54.2A54.2 54.2 0 0 1 108.4 54.2c0 29.7-24.1 53.8-54.56 53.8zM447.9 448h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.7V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5 42.6-48.3 87.6-48.3 93.7 0 111 61.7 111 141.9V448z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Send Message</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="bg-linear-to-r from-blue-500 to-purple-500 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-sm text-gray-300">{status}</p>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactUs;