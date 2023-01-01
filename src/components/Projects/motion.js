import { delay, filterProps } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
// import ReactDOM from "react-dom";
// import "./styles.css";

const RADIUS = 400;
function getTransform(progress, radius, index, totalItems) {
  const value = (index / totalItems) * progress;

  const x = radius * Math.cos(Math.PI * 2 * (value - (0.29)));
  const y = radius * Math.sin(Math.PI * 2 * (value - (0.23)));

  return `translate(${x}px, ${y}px)`;
}

function Motion() {

  const [Element, setElement] = useState(0);
  console.log(Element);
  function setvar() {
    setElement(Element === 0 ? "-15vw" : 0);
    startProgress();
  }
  
  
  const [progress, setProgress] = React.useState(0);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [link, setLink] = useState([]);
  // lastLength = idNo.length;
  const items = new Array(4).fill(null);
  // const items = new Array(idNo.length).fill(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api-dusky-pi.vercel.app/api/ProjectData');
      const data = await response.json();
      setTitle(data.map((e) => (e.title)));
      setDescription(data.map((e) => (e.des)));
      setLink(data.map((e) => (e.link)));
    }
    fetchData();
  }, []);

  const startProgress = () => {

    if (progress === 0) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 0.59) {
            clearInterval(interval);
            return 0.59;
          }
          return prevProgress + 0.01;
        });
      }, 25);
    } else {
      setProgress(0);
    }
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          top: "5rem",
        }}>
        <div>
        <div
            style={{
              position: "absolute",
              top: "1rem",
              backgroundColor: "var(--primary-color)",
              width: "50vw",
              height: "150vh",
              transform: `translateX(${Element})`,
              transition: "transform 300ms ease-out"
            }}
          >
          </div>

          <button
            onClick={setvar}
            style={{
              position: "absolute",
              left: progress === 0 ? "40%" : 0,
              top: "32rem",
              transition: "left 300ms ease-out",
              borderRadius: 10,
              width: 300,
              height: 40,
            }}
          >
            Projects
          </button>

          <div
            style={{
              height: "100vh",
            }}
          ></div>
          <div>
            {items.map((_, index) => (
              <motion.div
                onClick={() => window.location.href = link[index]}
                key={index}
                style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",  // make the element an inline element
                  width: "auto",  // set the width to "auto" to adjust to the content width
                  height: 150,  // set the height to "auto" to adjust to the content height
                  padding: 20,
                  top: "27rem",
                  left: "35%",
                  marginTop: 10,
                  backgroundColor: "white",
                  borderRadius: 10,
                  transform: getTransform(progress, RADIUS, index, items.length),
                  transition: "transform 50ms ease-out, opacity 300ms ease-out",
                  opacity: progress === 0 ? 0 : 1,
                  overflow: "auto"
                }}
              >
                <h1 className="headingData">{title[index]}</h1>
                {/* <div>
                  <p className="DesData">{description[index]}</p>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Motion;
