import React from "react";
import "./style.css";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
};

function AboutUs() {
    const timeline = [
        { icon: workIcon, date: 'Present', title: 'About me', desc: 'Hello, my name is Aryan Vijay Bhisikar and I am currently a second-year student at St Vincent Pallotti College of Engineering & Technology. I am pursuing a degree in engineering and will be completing my studies in 2025.' },
        { icon: workIcon, date: 'Present', title: 'About me', desc: 'Hello, my name is Aryan Vijay Bhisikar and I am currently a second-year student at St Vincent Pallotti College of Engineering & Technology. I am pursuing a degree in engineering and will be completing my studies in 2025.' },
        { icon: workIcon, date: 'Present', title: 'About me', desc: 'Hello, my name is Aryan Vijay Bhisikar and I am currently a second-year student at St Vincent Pallotti College of Engineering & Technology. I am pursuing a degree in engineering and will be completing my studies in 2025.' },
    ];

    return (
        <>
            <div className="aboutDiv">
                    <h1>TIMELINE</h1>
                <div className="contentDiv">
                    <VerticalTimeline
                        animate={true}
                        className="vertical-timeline-custom-line"
                    >
                        {timeline.map((item) => (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ backgroundImage: `url(${require('./wave.png')}` }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={item.date}
                                iconStyle={item.icon.iconStyle}
                                icon={item.icon.icon}
                            >
                                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{item.desc}</h4>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
}

export default AboutUs;