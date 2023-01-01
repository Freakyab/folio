import "./style.css";
import logo from "./logo.png"
import { useRef } from "react";
import App from "../../Body/App";
// import Projects from "../Projects/projects";
import Motion from "../Projects/motion";

function Nav() {
    const Home = useRef(null);
    const Project = useRef(null);
    const Contact = useRef(null);

    const scrollTo = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <>
            <nav>
                {/* <div className="logo_box"/> */}
                <img src={logo} className="logo_box" alt="logo" />
                <ul>
                    <li onClick={()=>scrollTo(Contact)} ><a href="#Contact">Contact</a></li>
                    <li onClick={()=>scrollTo(Project)}><a href="#Projects">Projects</a></li>
                    <li onClick={()=>scrollTo(Home)}><a href="#Home">Home</a></li>
                </ul>
            </nav>
            <div  className="border_App" ref ={Home}>
                <App/>
                
            </div>
            <div className="border_Project" ref ={Project}>
                {/* <Projects/> */}
                <Motion />
            </div>
        </>
    );
}

export default Nav;
