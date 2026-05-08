import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/610a4c13-7aff-4603-91eb-6758c3736db1/files/793b3c95-7df9-4575-adc7-2d2e05640898.jpg"
          alt="Кабинет детского психолога"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80">Детский нейропсихолог · Психоаналитик</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ВАШ РЕБЁНОК<br/>МОЖЕТ БОЛЬШЕ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Помогаю детям преодолеть трудности с речью, вниманием и поведением — мягко, научно, с заботой
        </p>
        <a
          href="https://t.me/+79089101320"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border border-white text-white px-8 py-3 uppercase tracking-wide text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          Записаться на консультацию
        </a>
      </div>
    </div>
  );
}