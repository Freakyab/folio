import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
function Projects() {
    const divRef = React.useRef(null);
    const [top, setTop] = useState(0);
    React.useEffect(() => {
            const div = divRef.current;
            const top = div.offsetTop;
            const left = div.offsetLeft;
            setTop(top);
            console.log(`Div position: top=${top}px, left=${left}px`);
          }, []);
    const setI = (i,top) => {
        let styles = {
            "--i": i,
            "--top": top,
        };
        return styles;
    };
    const [isActive, setActive] = useState(false);
    const [idNo, setIdNo] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [link, setLink] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api-dusky-pi.vercel.app/api/ProjectData');
            const data = await response.json();
            setIdNo(data.map((e) => (e.idno)));
            setTitle(data.map((e) => (e.title)));
            setDescription(data.map((e) => (e.des)));
            setLink(data.map((e) => (e.link)));
        }
        fetchData();
    }, []);
    return (
        <>
        <div className="main" ref={divRef}>  
            <div className={`projects ${isActive ? "active" : ""}`}>
                <span className="toggle" >
                    <button onClick={() => setActive(!isActive)}>Projects
                    </button>
                </span>
                {idNo.map((index) => (
                    <li key={index} style={setI(index,top)}>
                        <span className="mong">
                            <div className="data">

                            <h1 className="headingData">{title[index-1]}</h1>
                            <p className="DesData">{description[index-1]}</p>
                            <a href={link[index-1]} target="_blank" rel="noreferrer">View Project</a>
                            </div>
                        </span>
                    </li>
                ))}
            </div>
        </div>
        </>
    )
}
export default Projects;

