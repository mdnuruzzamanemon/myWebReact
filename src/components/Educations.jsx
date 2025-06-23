import React from 'react';
import '../css/timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';

const educationData = [
  {
    title: 'Bachelor of Science in Computer Science',
    validity: '2022 - Present',
    description: 'Studying core computer science subjects, participating in programming contests, and working on projects related to web technologies.',
    icon: faGraduationCap,
    position: 'left',
  },
  {
    title: 'Higher Secondary Certificate',
    validity: '2017 - 2019',
    description: 'Completed HSC with a focus on science and mathematics.',
    icon: faSchool,
    position: 'right',
  },
  {
    title: 'Secondary School Certificate',
    validity: '2012 - 2017',
    description: 'Completed SSC with distinction in science group.',
    icon: faSchool,
    position: 'left',
  },
];

const Educations = () => {
  return (
    <div className="timelineContainer">
      <div className="vertical-line"></div>
      {educationData.map((item, index) => (
        <div key={index} className={`box box-${item.position}`}>
          <span style={{position: 'absolute', top: 30, right: item.position === 'left' ? -25 : 'auto', left: item.position === 'right' ? -25 : 'auto'}}>
            <FontAwesomeIcon icon={item.icon} size="2x" style={{color: '#00626c', border: '8px solid #2C2F38', borderRadius: '50%', background: 'linear-gradient(-311deg, #000000, #003a40, #000)', padding: '10px'}} />
          </span>
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