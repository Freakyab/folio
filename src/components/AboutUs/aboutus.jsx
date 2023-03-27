import React from "react";
import "./style.css";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase,faUser,faSchool } from '@fortawesome/free-solid-svg-icons';

const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
};
const profileIcon = {
    icon: <FontAwesomeIcon icon={faUser} />,
};

const schoolIcon = {
    icon :<FontAwesomeIcon icon={faSchool} />,
};

function AboutUs() {
    const timeline = [
        { icon: profileIcon, date: '<Present>', title: 'About Me', desc: 'Hello, my name is Aryan Vijay Bhisikar and I am currently a second-year student at St Vincent Pallotti College of Engineering & Technology. I am pursuing a degree in engineering and will be completing my studies in 2025.'
        ,display: 'even' },
        {
            icon:workIcon, date: '<2021>',title: 'My Skills', desc: 'I have expertise in Python, JavaScript, C/C++, React, Node, and Express. I am capable of developing efficient software solutions and websites, and I stay up-to-date with the latest industry developments to deliver optimal results to clients'
            ,display: 'odd'
        },
        {
            icon: schoolIcon, date: '<2019>', title: 'My Journey', desc: 'Before pursuing engineering, I completed my 10th grade education at Mundle Public School. Since then, I have been passionate about technology and have been honing my skills in web and app development.',
            display: 'even'
        },
        {
            icon: profileIcon, date: '<2025>', title: 'My Goals', desc: 'I am looking to work in a challenging environment where I can utilize my skills and knowledge to the fullest. I am also looking to learn new technologies and improve my skills.'
        }
    ];

    return (
        <>
            <div className="aboutDiv">
                <h1 className="timelineTitle">Timeline</h1>
                <div className="contentDiv">
                    <VerticalTimeline
                        animate={true}
                        className="vertical-timeline-custom-line "
                    >
                        {timeline.map((item) => (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work "
                                contentStyle={ item.display !== 'even' ? {background: "linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(189,96,209,1) 100%)"
                                    } : { background: "linear-gradient(300deg, rgba(255,255,255,1) 0%, rgba(33,150,243,1) 100%)" } }
                                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                                date={item.date}
                                iconStyle={{background: "#292d3b", color: '#fff' }}
                                icon={item.icon.icon}
                            >
                                <h3 className="vertical-timeline-element-title hover-underline-animation">{item.title}</h3>
                                <p className="vertical-timeline-element-subtitle">{item.desc}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
}

export default AboutUs;