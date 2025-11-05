import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Rocket } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: Palette,
      title: 'UI/UX Focus',
      description: 'Creating beautiful user experiences',
    },
    {
      icon: Rocket,
      title: 'Modern Stack',
      description: 'Using latest web technologies',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 md:mb-12 rounded-full" />
          
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 md:mb-12 text-left">
            Hi 😇 I'm a passionate Front-End Developer with one year of hands-on experience creating modern, responsive, and user-friendly web interfaces. I specialize in <span className="text-primary font-semibold">HTML5, CSS3, Tailwind CSS, JavaScript, and React</span>, and I've built over 35 projects, including a fully functional bilingual E-Commerce website integrated with Firebase. I'm committed to writing clean, maintainable code and constantly improving user experience (UI/UX). Open to collaboration, internships, and front-end development opportunities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border card-hover"
              >
                <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
