'use client';

import {} from 'antd';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  return (
    <div className="App">
      <section className="py-5">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-center mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            This is a sample portfolio page built with Next.js and Tailwind CSS.
            Explore my projects and skills!
          </p>
        </motion.div>
      </section>
    </div>
  );
}
