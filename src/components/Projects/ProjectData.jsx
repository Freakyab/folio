import React from "react";
import { SiPython } from "react-icons/si";
import { IoLogoNodejs } from 'react-icons/io';
import { useEffect, useState } from "react";
import "./style.css";
import { motion, delay } from "framer-motion";
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
        x: 350,
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
    const [indexHover, setIndexHover] = useState(0);
    const [idNo, setIdNo] = useState([]);
    const [Image,setImage]=useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [link, setLink] = useState([]);
    const [per, setPer] = useState([]);
    const [type, setType] = useState([]);
    // const [Percentage, setPercentage] = useState(0);
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
            console.log(Image);
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
                                        <motion.div
                                            style={{
                                                position: "absolute",
                                                left: index % 2 === 0 ? "60vw" : "20vw",
                                                color: "white",
                                                // backgroundColor: backgroundColor
                                            }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}

                                        >
                                            {description[index - 1]}
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

                                                    {/* <p className="description">{description[index - 1]}</p> */}
                                                    <div className="arrow">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                    <h3>COMPLETE</h3>
                                                </div>
                                                <span>

                                                    <a href={link[index - 1]} target="_blank" rel="noreferrer">
                                                        {typeSelection(type[index - 1])}
                                                    </a>

                                                </span>

                                                {/* <button onClick={()=>{handleClick()}}>click me</button> */}
                                            </div>
                                            <div>
                                                <CircularProgress
                                                    size={90}
                                                    strokeWidth={10}
                                                    percentage={Percentage}
                                                    color="BLACK"

                                                // variants={{CircularProgressDelay}}
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