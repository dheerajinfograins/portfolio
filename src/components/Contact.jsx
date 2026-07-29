import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let result;
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        result = await response.json();
      } else {
        result = { error: 'API route not found (Are you running locally without Vercel CLI?)' };
      }

      if (response.ok) {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      } else {
        toast.error(result.error || 'Failed to send the message. Please try again.');
        console.error('Server Error:', result.error);
      }
    } catch (error) {
      toast.error('Failed to send the message. Please try again.');
      console.error('Fetch Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 px-6 md:px-12 max-w-4xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-cyan-400 font-medium tracking-wider uppercase mb-2">Get in touch</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Contact.</h2>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl shadow-cyan-900/10 relative overflow-hidden">
          
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Name</span>
              <input
                type="text"
                name="user_name"
                placeholder="What's your name?"
                className="bg-slate-800 py-4 px-6 text-white rounded-lg outline-none border border-slate-700 focus:border-cyan-400 transition-all placeholder:text-slate-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Email</span>
              <input
                type="email"
                name="user_email"
                placeholder="What's your email?"
                className="bg-slate-800 py-4 px-6 text-white rounded-lg outline-none border border-slate-700 focus:border-cyan-400 transition-all placeholder:text-slate-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Message</span>
              <textarea
                rows={5}
                name="message"
                placeholder="What do you want to say?"
                className="bg-slate-800 py-4 px-6 text-white rounded-lg outline-none border border-slate-700 focus:border-cyan-400 transition-all resize-none placeholder:text-slate-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                required
              />
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 bg-cyan-500 py-4 px-8 outline-none w-fit text-slate-950 font-bold shadow-md rounded-xl hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
