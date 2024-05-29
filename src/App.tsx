import Navigation from "./components/Navigation";
import { motion } from "framer-motion";

const App = () => {
  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />
      <section className="flex flex-col p-10 ml-20 w-full gap-5">
        <h1 className="text-4xl text-neutral-200">Dashboard</h1>
        <motion.div
          className="w-full h-80 border border-neutral-500/50 bg-neutral-800/20 rounded flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-neutral-100 text-center">
            Welcome to the website, I am Pavan, a web developer.
          </p>
        </motion.div>
        <div className="flex flex-row gap-5 w-full">
          <motion.div
            className="border border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-neutral-100 text-center px-4">
              I specialize in creating responsive and interactive web applications using modern technologies.
            </p>
          </motion.div>
          <motion.div
            className="border border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-neutral-100 text-center px-4">
              My skills include HTML, CSS, JavaScript, React, and Node.js. I enjoy problem-solving and bringing ideas to life.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default App;
