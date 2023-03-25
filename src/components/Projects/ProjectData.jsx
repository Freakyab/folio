import React from "react";
import { SiPython } from "react-icons/si";
import { IoLogoNodejs } from 'react-icons/io';
import { SiGithub } from "react-icons/si";
import { useEffect, useState } from "react";
import "./style.css";
import { motion} from "framer-motion";
import App from "./description";

import CircularProgress from "./CircularProgress";

const divAnimateOdd = {
    offscreen: {
        x: 0,
        opacity: 0.1,
    },
    onscreen: {
        x: "50vw",
        opacity: 1,
        // rotate: 360,
        transition: {
            type: "spring",
            stiffness: 60,
        }
    }

}
const divAnimateEven = {
    offscreen: {
        x: "50vw",
        opacity: 0.1,
    },
    onscreen: {
        x: 250,
        opacity: 1,
        // rotate: 360,
        transition: {
            type: "spring",
            stiffness: 60,
        }
    }
}


function ProjectData() {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [hover, setHover] = useState(false);
    const [hoverRef, setHoverRef] = useState(null);
    const [idNo, setIdNo] = useState([]);
    const [Image,setImage]=useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [link, setLink] = useState([]);
    const [per, setPer] = useState([]);
    const [type, setType] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api-dusky-pi.vercel.app/api/ProjectData');
            const data = await response.json();
            setIdNo(data.map((e) => (e.idno)));
            setTitle(data.map((e) => (e.title)));
            setDescription(data.map((e) => (e.des)));
            setLink(data.map((e) => (e.link)));
            setPer(data.map((e) => (e.per)));
            setImage(data.map((e) => (e.image)));
            setType(data.map((e) => (e.type)));
        }
        fetchData();
    }, []);
    
    const handleClick = (e) => {
        setBackgroundColor(Image[e]);
    };

    function typeSelection(e) {
        if (e === "python") {
            return <SiPython className="icon" />
        }
        else if (e === "node") {
            return <IoLogoNodejs className="icon" />
        }
    }
    return (
        <>
            <div className="main"
                style={{
                    backgroundImage: `url(${backgroundColor})`,
                    paddingBottom: "10rem",
                }}>
                <div
                    style={{
                        position: "relative",
                        top: "7rem",
                        marginBottom: "10rem",

                    }}>
                    <h1 className="project">Projects</h1>
                    {/* <img className="TypingGif"src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="200"/> */}

                    {idNo.map((index) => {
                        const Percentage = per[index - 1];
                        return (
                            <>
                                <motion.div
                                    ref={(element) => setHoverRef(element)}
                                    onHoverStart={() => setHover(index)}
                                    onHoverEnd={() => setHover(null)}

                                >
                                    {hover === index && (
                                        <motion.div className="SideDiv"
                                            style={{
                                                position: "absolute",
                                                display: "flex",
                                                flexDirection: "column",
                                                left: index % 2 === 0 ? "50vw" : "16vw",
                                                padding:20,
                                                color: "white",
                                                height: "25vh",
                                                overflow: "auto",
                                                boxShadow: "inset 0 0px 10px 0 green",
                                            }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <h1 className = "DescriptionHeader">Details</h1>
                                            <App/>
                                            {/* <h3>{description[index - 1]}</h3> */}
                                            <div className="link">
                                                <p> Check source code
                                                <a href={link[index- 1]} target="_blank" rel="noreferrer"><SiGithub className="SourceCode"/></a></p>
                                            </div>
                                        </motion.div>
                                    )}
                                    <motion.div className="Box"
                                        style={{ marginBottom: 100 }}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        viewport={{ once: false }}
                                        onClick={()=>{handleClick(index-1)}}

                                        variants={{
                                            offscreen: (index % 2 === 0 ? divAnimateEven.offscreen : divAnimateOdd.offscreen),

                                            onscreen: (index % 2 === 0 ? divAnimateEven.onscreen : divAnimateOdd.onscreen),
                                        }}

                                    >
                                        <span className="ProjectData">
                                            <div>
                                                <span className="Header">
                                                    <h1>
                                                        {title[index - 1]}</h1>
                                                </span>
                                                <div className="description">
                                                    <div className="arrow">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                    <h3 className="Complete">COMPLETED</h3>
                                                </div>
                                                <span>
                                                    <a href={link[index - 1]} target="_blank" rel="noreferrer">
                                                        {typeSelection(type[index - 1])}
                                                    </a>
                                                </span>
                                            </div>
                                            <div>
                                                <CircularProgress
                                                    size={90}
                                                    strokeWidth={10}
                                                    percentage={Percentage}
                                                    color="BLACK"
                                                />
                                            </div>
                                        </span>
                                    </motion.div>
                                </motion.div>
                            </>
                        );
                    })}
                </div>

            </div>
        </>
    );
}
export default ProjectData;