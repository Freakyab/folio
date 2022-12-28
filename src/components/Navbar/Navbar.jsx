import "./style.css";
import logo from "./logo.png"
function Nav() {
    return (
        <>
            <nav>
                {/* <div className="logo_box"/> */}
                <img src={logo} className="logo_box" alt ="logo"/>
                <ul>
                    <li className="contact"><a href="#Contact">Contact</a></li>
                    <li className="Gallery"><a href="#Gallery">Gallery</a></li>
                    <li className="contact active"><a href="#Home">Home</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
