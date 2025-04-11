import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust the path if needed

const Projects = () => {
  const projects = [
    {
      title: 'Scale in',
      description: 'Well-structured Token investing Project with React.js and Tailwind css',
      image: '/images/project1.png', // Replace with your image path
      url: 'https://scale-in.com/', // Replace with your project URL
    },
    {
      title: 'GoBooking',
      description: 'SaaS Project for Booking System.',
      image: '/images/project2.png', // Replace with your image path
      url: 'https://gobooking.biz/', // Replace with your project URL
    },
    {
      title: 'iVaCay Presale',
      description: 'BNB .',
      image: '/images/project3.png', // Replace with your image path
      url: 'https://ivacay.io/', // Replace with your project URL
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-900 opacity-80">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;