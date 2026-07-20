"use client";

import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Contact() {

  const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({...form,[e.target.name]: e.target.value,});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        toast.error("Please fill in all fields.");
        return;
      }

      try {
        setLoading(true);

        const { data } = await axios.post("/api/contact", form);

        if (data.success) {
          toast.success("Message sent successfully 🚀");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        } else {
          toast.error(data.message || "Something went wrong.");
        }
      } catch (error: unknown) {
        toast.error(
          axios.isAxiosError(error)
            ? error.response?.data?.message || "Failed to send message."
            : "Failed to send message."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-4"
    >
      <div className="max-w-xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          className="text-center mb-15"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Let's Connect
          </h2>

          <p className="text-zinc-400 mt-3 max-w-md mx-auto text-sm md:text-base">
            Have a project in mind, an opportunity, or just want to say hello?
            Feel free to send me a message.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-45 transition duration-1000 group-hover:duration-200" />

          <motion.form
            initial={{ opacity: 0, scale: .95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            // viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-4"
          >

            {/* Name */}

            <div>
              <label className="text-xs text-zinc-400 mb-1.5 block">
                Name
              </label>

              <div className="flex items-center gap-2.5 border border-zinc-800 rounded-xl px-3.5 py-2.5 focus-within:border-blue-500 transition">

                <User className="text-zinc-500" size={18} />

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="Your name"
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-sm"
                  required
                  suppressHydrationWarning
                />

              </div>
            </div>

            {/* Email */}

            <div>
              <label className="text-xs text-zinc-400 mb-1.5 block">
                Email
              </label>

              <div className="flex items-center gap-2.5 border border-zinc-800 rounded-xl px-3.5 py-2.5 focus-within:border-blue-500 transition">

                <Mail className="text-zinc-500" size={18} />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full bg-transparent outline-none text-sm"
                  required
                  suppressHydrationWarning
                />

              </div>
            </div>

            {/* Message */}

            <div>
              <label className="text-xs text-zinc-400 mb-1.5 block">
                Message
              </label>

              <div className="flex gap-2.5 border border-zinc-800 rounded-xl px-3.5 py-2.5 focus-within:border-blue-500 transition">

                <MessageSquare
                  className="text-zinc-500 mt-0.5"
                  size={18}
                  />

                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full bg-transparent outline-none text-sm resize-none"
                  required
                  suppressHydrationWarning
                />

              </div>
            </div>

            {/* Button */}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: .98 }}
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-sm hover:shadow-[0_0_20px_rgba(59,130,246,.4)] transition"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </motion.button>

          </motion.form>
        </div>

      </div>
    </section>
  );
}