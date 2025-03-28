import React from 'react';
import SkillCard from './SkillCard'; // Adjust the path if needed

const Skills = () => {
  const skills = [
    'JavaScript',
    'Next.js',
    'Vue.js',
    'Node.js',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
    'Python',
    'Solidity',
    'Go',
    'Rust',
    'DevOps',
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-900 text-center opacity-90">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </div>

      {/* Custom CSS for the flowing border */}
      <style jsx>{`
        .animate-border-flow {
          animation: borderFlow 4s linear infinite;
        }

        @keyframes borderFlow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -320;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;