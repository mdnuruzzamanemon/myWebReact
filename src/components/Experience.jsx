import React from 'react';
import '../css/timeline.css';

const experienceData = [
    {
        title: 'PirhoTech',
        validity: 'Founder & CTO || 2023–Present',
        description:
          'Founded an agency offering web/app development and digital marketing services. Led project delivery from concept to launch for clients across various industries. Managed cross-functional teams to ensure quality, innovation, and on-time delivery.',
        iconClass: 'fa-solid fa-laptop-code',
        position: 'left',
      },
      {
        title: 'Sotter Somachar (Online News Portal)',
        validity: 'Web Developer (Maintenance & Support) || 2021–2022',
        description:
          'Maintained and updated the news portal’s website to ensure optimal performance and user experience. Handled bug fixes, content updates, and implemented backend improvements.',
        iconClass: 'fa-solid fa-newspaper',
        position: 'right',
      }
      
];

const Experience = () => {
  return (
    <div className="timelineContainer">
      <div className="vertical-line"></div>
      {experienceData.map((item, index) => (
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

export default Experience; 