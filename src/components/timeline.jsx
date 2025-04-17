import React from 'react';
import '../css/timeline.css';

const timelineData = [
  {
    title: 'PiRhoTech',
    validity: 'Founder & CTO || 2023-present',
    description:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    iconClass: 'fa-brands fa-html5 html',
    position: 'left',
  },
  {
    title: 'CSS',
    description:
      'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.',
    iconClass: 'fa-brands fa-css3 css',
    position: 'right',
  },
  {
    title: 'JavaScript',
    description:
      'JavaScript (JS) is a lightweight interpreted programming language with first-class functions and multi-paradigm support.',
    iconClass: 'fa-brands fa-js javascript',
    position: 'left',
  },
  {
    title: 'React.js',
    description:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on components.',
    iconClass: 'fa-brands fa-react react',
    position: 'right',
  },
  {
    title: 'Angular',
    description:
      'Angular is a TypeScript-based single-page web app framework led by the Angular Team at Google.',
    iconClass: 'fa-brands fa-angular angular',
    position: 'left',
  },
  {
    title: 'Vue.js',
    description:
      'Vue is a JavaScript framework that provides a declarative and component-based programming model for building UIs.',
    iconClass: 'fa-brands fa-vuejs vue',
    position: 'right',
  },
];

const Timeline = () => {
  return (
    <div className="timelineContainer">
      <div className="vertical-line"></div>
      {timelineData.map((item, index) => (
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

export default Timeline;
