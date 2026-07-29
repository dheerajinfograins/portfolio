import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

const Github = () => {
  const username = "dheerajinfograins"; // Updated to your actual GitHub username

  return (
    <section id="github" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-cyan-400 font-medium tracking-wider uppercase mb-2 text-center">Open Source</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">GitHub Contributions.</h2>

        <div className="flex flex-col gap-10">

          {/* GitHub Stats Card */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0f172a&title_color=22d3ee&icon_color=22d3ee&text_color=cbd5e1`}
              alt="GitHub Stats"
              className="w-full max-w-md rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-800 hover:border-cyan-500/50 transition-colors"
            />
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0f172a&title_color=22d3ee&text_color=cbd5e1`}
              alt="Top Languages"
              className="w-full max-w-sm rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-800 hover:border-cyan-500/50 transition-colors"
            />
          </div>

          {/* GitHub Calendar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-10 flex justify-center hover:border-cyan-500/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-x-auto"
          >
            <div className="min-w-[700px]">
              <GitHubCalendar
                username={username}
                blockSize={14}
                blockMargin={5}
                colorScheme="dark"
                theme={{
                  dark: ['#1e293b', '#0891b2', '#06b6d4', '#22d3ee', '#67e8f9'] // Cyan theme
                }}
                fontSize={14}
              />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Github;
