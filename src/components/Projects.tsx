import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import ecommerceImage from '@/assets/project-ecommerce.png';
import dashboardImage from '@/assets/project-dashboard.jpg';
import portfolioImage from '@/assets/project-portfolio.jpg';
import ticTacToe from '@/assets/tic-tac-toe-ai.png';
import reactNewsfeedApp from '@/assets/react-newsfeed-app.png';
import SimpleOmeletteRecipe from '@/assets/Simple-Omelette-Recipe.png';
import CalorieTracker from '@/assets/Calorie-Tracker.png';
import calculator from '@/assets/calculator.png';
import aroundTheWorld from '@/assets/around-the-world.png';
import ageCalculator from '@/assets/age-calculator.png';
import toDoApp from '@/assets/to-do-app.png';
import GithubUserSearchApp from '@/assets/Github-User-Search-App.png'
import QuranTab from '@/assets/Quran-Tab.png';
import toDoAppMain from '@/assets/to-do-app-main.png';


export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
//  ## 📸 Screenshots
// ![App Screenshot](./img/tic-tac-toe-ai.png) 
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'This is a modern **E-Commerce website** built using **React** and **Firebase**, designed to provide a smooth, fast, and multilingual shopping experience in **Arabic and English**. The project was developed as a **graduation project**, focusing on clean UI, responsive design, and functional integration with Firebase services.',
      image: ecommerceImage,
      goToVercel : 'https://e-commerce-website-two-orpin.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/E-Commerce-Website-',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Material UI (MUI)', ' i18next'],
    },
    {
      title: '🤖 Tic-Tac-Toe game',
      description: 'Tic-Tac-Toe game with smart AI opponent. The AI tries to win or block your moves. Includes a welcome page, clean design, and fully in vanilla JavaScript.',
      image: ticTacToe,
      goToVercel : 'https://tic-tac-toe-ai-kappa.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/tic-tac-toe-ai',
      tags: ['HTML', 'CSS3' , 'vanilla JavaScript'],
    },
    {
      title: 'Calculator',
      description: '**Calculator** is a simple web app using **HTML, CSS, and JavaScript**. It performs basic operations like addition, subtraction, multiplication, and division. The design is clean and responsive for smooth use on all devices. Future updates may add advanced functions, history tracking, and theme customization. 🚀 🚀',
      image: calculator,
      goToVercel: 'https://calculator-blush-mu.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/Calculator',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: 'Recipe-page',
      description: 'A simple and clean recipe page built with HTML and CSS only, as part of a beginner-level front-end development exercise. The goal is to practice structuring and styling a static webpage.',
      image: SimpleOmeletteRecipe,
      goToVercel: 'https://recipe-page-nine-tau.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/recipe-page',
      tags: ['HTML5', 'CSS3'],
    },
    {
      title: 'Around-the-world',
      description: '🌍 Around the World is a modern React.js application that lets users explore countries around the world. The app supports English and Arabic using the i18next library for internationalization and uses Tailwind CSS for a responsive and stylish UI.',
      image: aroundTheWorld,
      goToVercel: 'https://around-the-world-theta-roan.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/Around-the-world',
      tags: ['React.js', 'Tailwind CSS' , ' i18next'],
    },
    {
      title: 'Age Calculator',
      description: '**Age Calculator** is a simple web app built with HTML, CSS, and JavaScript. It calculates your exact age in years, months, and days based on your birthdate. The app features a clean UI, responsive design, and accurate calculations. Future improvements include multi-language support and enhanced user experience. 🚀',
      image: ageCalculator,
      goToVercel: 'https://age-calculator-nu-puce.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/Age-Calculator',
      tags: ['HTML5', 'CSS3' , 'JavaScript'],
    },
    {
      title: 'To-Do App',
      description: 'A clean and responsive To-Do app that helps you manage your tasks effortlessly. You can add, complete, filter, and delete tasks. It supports light/dark mode, live task counter, drag-and-drop reordering, and saves your data with localStorage. Built with HTML, CSS, and JavaScript.',
      image: toDoApp,
      goToVercel: 'https://todo-app-advanced.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/todo-app-advanced',
      tags: ['HTML5', 'CSS3' , 'JavaScript'],
    },
    {
      title:  'Calorie Tracker',
      description: ' ** Calorie Tracker ** Project A modern React + Vite demo application with a small Node.js server that allows users to track, add, edit, and delete daily calorie records. This project demonstrates full CRUD operations and how to integrate a React frontend with a lightweight backend API.',
      image: CalorieTracker,
      goToVercel: 'https://calorie-tracker-app-orpin.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/calorie-tracker-app',
      tags: ['React', 'CSS3' , 'JavaScript (ES6+)'],
    },
    {
      title:  'NewsFeed App',
      description: ' 📰 React NewsFeed App A modern News Feed Application built using React, Material UI, and NewsAPI. This app allows users to browse the latest news from different sources with a clean and responsive UI',
      image: reactNewsfeedApp ,
      goToVercel: 'https://react-newsfeed-app.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/react-newsfeed_app',
      tags: ['React', 'Material UI' , 'NewsAPI'],
    },
     {
      title:  ' GitHub User Search App',
      description: ' 👨‍💻 GitHub User Search App A simple and elegant web application for searching GitHub users, built using HTML, JavaScript, and SCSS. It allows users to enter a GitHub username and view public information such as repositories, followers, and location — all displayed in a clean and responsive layout.',
      image: GithubUserSearchApp ,
      goToVercel: 'https://github-user-search-app-tau-coral.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/github-user-search-app',
      tags: ['HTML5', 'SCSS' , 'JavaScript (Vanilla JS)' , 'GitHub API'],
    },
    {
      title:  ' Qurantab – Landing Page ',
      description: ' 📖 Qurantab – Landing Page A clean, modern, and fully responsive landing page built using HTML, SCSS, and JavaScript. This project was created to showcase an elegant Quran-related product concept, designed with smooth animations, organized code, and a minimalist layout for an engaging user experience.',
      image: QuranTab,
      goToVercel: 'https://qurantab-landing-page-one.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/Qurantab-landing-page',
      tags: ['HTML5', 'SCSS' , 'JavaScript (Vanilla JS)'],
    },
    {
      title:  ' Todo App',
      description: ' 📝 Todo App A clean, responsive, and fully functional Todo Application built using HTML, SCSS, and JavaScript. This project was completed as part of a Frontend Mentor Challenge to enhance front-end development skills and practice DOM manipulation, state management, and responsive design.',
      image: toDoAppMain,
      goToVercel: 'https://todo-app-main-kappa-lime.vercel.app/',
      goToGithub : 'https://github.com/SIDIAHMED-4/todo-app-main',
      tags: ['HTML5', 'SCSS' , 'JavaScript (Vanilla JS)'],
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing various web development skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl border border-border card-hover group"
            >
              <div className="relative overflow-hidden h-48 sm:h-56">
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs md:text-sm bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.goToVercel} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="w-full group">
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button></a>
                <a href={project.goToGithub} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="w-full group">
                 View on GitHub

                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
