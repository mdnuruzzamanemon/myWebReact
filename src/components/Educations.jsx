import React from 'react';
import '../css/timeline.css';

const educationData = [
    {
        title: 'Bachelor of Science in Computer Science',
        validity: '2022 - Present',
        description: 'Studying core computer science subjects, participating in programming contests, and working on projects related to web technologies.',
        iconClass: 'fa-solid fa-graduation-cap',
        position: 'left',
      },
      {
        title: 'Higher Secondary Certificate',
        validity: '2017 - 2019',
        description: 'Completed HSC with a focus on science and mathematics.',
        iconClass: 'fa-solid fa-school',
        position: 'right',
      },
      {
        title: 'Secondary School Certificate',
        validity: '2012 - 2017',
        description: 'Completed SSC with distinction in science group.',
        iconClass: 'fa-solid fa-school',
        position: 'left',
      },
];

const Educations = () => {
  return (
    <div className="timelineContainer">
      <div className="vertical-line"></div>
      {educationData.map((item, index) => (
        <div key={index} className={`box box-${item.position}`}>
          <i className={item.iconClass}></i>
          <div className="info">
            <h2>{item.title}</h2>
            <p>{item.validity}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Educations; 