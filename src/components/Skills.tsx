import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Database, GitBranch, Flame, Smartphone } from 'lucide-react';

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'HTML5', icon: Code2, color: 'text-orange-500' },
    { name: 'CSS3', icon: Palette, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-500' },
    { name: 'JavaScript', icon: Code2, color: 'text-yellow-500' },
    { name: 'React', icon: Code2, color: 'text-blue-400' },
    { name: 'Git', icon: GitBranch, color: 'text-red-500' },
    { name: 'Firebase', icon: Flame, color: 'text-amber-500' },
    { name: 'Responsive Design', icon: Smartphone, color: 'text-green-500' },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="bg-card p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl border border-border card-hover group"
            >
              <skill.icon className={`w-10 h-10 md:w-12 md:h-12 ${skill.color} mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
