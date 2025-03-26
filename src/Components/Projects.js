import React from 'react';
import ProjectCard from './ProjectCard';
import About from '../pages/About';
import projectImage1 from '../images/choki.png'
import projectImage2 from '../images/home_cloud.png';

const projects = [
    {
        title: "Choki kobudo ryu",
        description: "Japonské bojové umění v Ústí n. L.",
        tech: "React, bootstrap, Node.js",
        image: projectImage1,
        link: "https://www.choki-kobudo-ryu.cz"
    },
    {
        title: "HomeCloud",
        description: "domácí cloudové řešení běžící na systému RPi.",
        tech: "React, bootstrap, Node.js, express, MongoDB",
        image: projectImage2,
        link: "https://github.com/I3lade02/file-storage"
    }
];

const Projects = () => {
    return (
        <section className='py-12 px-4 bg-gray-50'>
            <h2 className='text-3xl font-semibold text-center text-gray-900 mb-8'>Moje projekty</h2>
            <About />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        image={project.image}
                        link={project.link}
                        data-aos="fade-up"
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;