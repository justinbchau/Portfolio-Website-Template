import React from 'react';
import AccordianItem from './AccordianItem';

import { projects } from '../data/info';

const Accordian = () => {
  return (
    <>
      {projects.map((project) => (
        <div key={project.title}>
          <AccordianItem
            link={project.link}
            title={project.title}
            description={project.description}
          />
        </div>
      ))}
    </>
  );
};

export default Accordian;
