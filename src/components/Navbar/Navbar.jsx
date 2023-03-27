import "./style.css";
import {Link}  from 'react-scroll' 
import Home from "../Home/home";
import AboutUs from "../AboutUs/aboutus";
import Contact from "../Contact/contact";

function Nav() {
    const menu = [
        {
            id: 1,
            title: "Home",
        },
        {
            id: 2,
            title: "AboutUs",
        },
        {
            id: 3,
            title: "Contact",
        },
        {
            id: 4,
            title: "Projects",
        }
    ]

    return (
        <>
            <header>
                <nav>
                    <ul>
                        {menu.map((item) => (
                            <li key={item.id}>
                                    <Link to={item.title} smooth={true} duration={1000} offset={-70}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main>
                {menu.map((item) => (
                    <div key={item.id} id={item.title} className ="container">
                        {item.title === "Home" ? <Home /> : item.title === "AboutUs" ? <AboutUs /> : item.title === "Contact" ? <Contact /> : undefined}
                    </div>
                ))}
            </main>
        </>
    );
}

export default Nav;
