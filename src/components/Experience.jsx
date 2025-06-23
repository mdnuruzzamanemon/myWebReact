import React from 'react';
import '../css/timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const experienceData = [
  {
    title: 'PirhoTech',
    validity: 'Founder & CTO || 2023–Present',
    description:
      'Founded an agency offering web/app development and digital marketing services. Led project delivery from concept to launch for clients across various industries. Managed cross-functional teams to ensure quality, innovation, and on-time delivery.',
    icon: faLaptopCode,
    position: 'left',
  },
  {
    title: 'Sotter Somachar (Online News Portal)',
    validity: 'Web Developer (Maintenance & Support) || 2021–2022',
    description:
      "Maintained and updated the news portal's website to ensure optimal performance and user experience. Handled bug fixes, content updates, and implemented backend improvements.",
    icon: faNewspaper,
    position: 'right',
  },
];

const Experience = () => {
  return (
    <div className="timelineContainer">
      <div className="vertical-line"></div>
      {experienceData.map((item, index) => (
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

export default Experience; 