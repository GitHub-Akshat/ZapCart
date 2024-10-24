import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/category');
  };

  return (
    <div className="min-h-screen w-full overflow-hidden absolute">
      {/* Background image with framer-motion */}
      <motion.img
        alt="background"
        src="/landing.jpg"
        className="object-cover w-full h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 flex flex-col p-12 space-y-8 mt-20 ml-12">
        <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400"
        >
          ZapCart
        </motion.h1>
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-3xl text-neutral-900 font-semibold"
        >
          Elevate Your Shopping Journey: <br/> Discover Quality & Shop Smart!
        </motion.h3>
      </div>

      {/* Get Started Button */}
      <div className="absolute inset-0 flex justify-start items-center p-8 mx-24 mt-56 ">
        <motion.button
          onClick={handleGetStarted}
          className="px-8 py-3 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,1.0)_45%,rgba(0,0,0,0.6)_100%)] text-white text-lg font-bold rounded-full animate-bounce hover:scale-110 transform transition duration-300 ease-in-out"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Landing;
