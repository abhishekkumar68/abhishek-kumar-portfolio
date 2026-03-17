import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">

      {/* Floating Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Abhishek Kumar
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Full Stack Developer • Problem Solver • Creative Thinker
        </p>

        <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:scale-110 transition">
          View Projects
        </button>
      </motion.div>
    </div>
  );
}

export default Home;