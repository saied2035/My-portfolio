import React, { useState } from 'react';
import projects from './projectsData';
import Project from './project/project';
import PopupProject from './popupProject/popupProject';

const Projects = () => {
  const [show, setShow] = useState(0);
  return (
    projects.map(({
      preview, name, technologies, popupPreview, info, demo, source, id,
    }) => (
      <React.Fragment key={`project${id}`}>
        <Project
          id={id}
          preview={preview}
          name={name}
          technologies={technologies}
          showPopup={setShow}
        />
        {
          id === show && (
          <PopupProject
            showPopup={setShow}
            popupPreview={popupPreview}
            name={name}
            technologies={technologies}
            info={info}
            demo={demo}
            source={source}
          />
          )
        }
      </React.Fragment>
    ))
  );
};

export default Projects;
