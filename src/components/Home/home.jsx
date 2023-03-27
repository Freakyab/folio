import React, { useMemo } from "react";
import "./style.css";

const Home = () => {

    return (
        <>
            <div className="homeDiv">
                <div className="contentDiv">
                    <div className="main-div ">
                        <div className="cover">
                            <h1 className="title hover-underline-animation">Hello,</h1>
                        </div>
                        {TypeEffect()}
                    </div>
                </div>
            </div>
        </>
    );
}

const TypeEffect = () => {
    //                            12345678912345    12345678912345    12345678912345    12345678912345    12345678912345    12345678912345
    const array = useMemo(() => ["Aryan       ", "Web-Dev       ", "Programmer  ", "Designer     ", "Engineer  ","Awesome   "], []);
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const [iter, setIter] = React.useState(0);
    const [text, setText] = React.useState(array[0]);
    const [arrayIndex, setArrayIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setText(text.split('').map((item, index) => {
                if (index < iter) {
                    // if(array[arrayIndex][index] === " ")
                    // {
                    //     return;
                    // }
                    return array[arrayIndex][index];
                } else {
                    return letter[Math.floor(Math.random() * letter.length)];
                }
            }).join(''));

            if (iter >= array[arrayIndex].length) {
                setArrayIndex((arrayIndex + 1) % array.length);
                setIter(0);
            } else {
                setIter(iter + 0.1);
            }

            if (arrayIndex === array.length - 1 && iter >= array[arrayIndex].length) {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [text, arrayIndex, iter, array]);

    return (
        <>
            <div className="heading ">
                <h2 className="heading1 hover-underline-animation" >I am {"<"}</h2>
                <h2 className="heading2 ">{text} <span style = {{color : "white"}}>
                {">"}
                    </span></h2>
            </div>
        </>
    );
}

export default Home;