import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, FolderGit2, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';

const Counter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return <span ref={ref}>{count}</span>;
};

export const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Award,
      value: 35,
      label: 'Certificates Earned',
      suffix: '+',
    },
    {
      icon: FolderGit2,
      value: 30,
      label: 'Projects Built',
      suffix: '+',
    },
    {
      icon: Calendar,
      value: 1,
      label: 'Year of Experience',
      suffix: '',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-4 md:mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gradient mb-2">
                <Counter end={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
