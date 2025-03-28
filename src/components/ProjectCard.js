import React from 'react';

const ProjectCard = ({ title, description, image, url }) => (
  <div className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
    )}
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-white mb-4">{description}</p>
    {/* <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      View Project
    </a> */}
  </div>
);

export default ProjectCard;