
import React from 'react';

const ProjectCard = ({ title, description, tech, image, link }) => {
    return (
        <div className='bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out'>
            <img src={image} alt={title} className='w-full h-48 object-contain' />
            <div className='p-4'>
                <h3 className='text-2xl font-semibold text-gray-900'>{title}</h3>
                <p className='text-gray-700 mt-2'>{description}</p>
                <div className='mt-4'>
                    <span className='text-sm font-medium text-gray-500'>Technologie</span>
                    <p className='text-sm text-gray-600'>{tech}</p>
                </div>
                <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block mt-4 bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition duration-300'
                >
                    Zobrazit projekt
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;