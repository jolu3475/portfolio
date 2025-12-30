'use client';

import {} from 'antd';
import { motion } from 'framer-motion';
import Header from '@/content/header';

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
          <Header />
        </motion.div>
      </section>
    </div>
  );
}
