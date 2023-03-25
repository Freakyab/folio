import React , {useEffect,useState} from 'react';
import Typewriter from "typewriter-effect";

function App() {

    const [description, setDescription] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api-dusky-pi.vercel.app/api/ProjectData');
            const data = await response.json();
            setDescription(data);
        }
        fetchData();
    }, []);
    console.log(description);
    // const des = description[0];
return (
	<div className="App">
	<Typewriter

	onInit={(typewriter)=> {

	typewriter
		
	.typeString(description[0])
		
	.pauseFor(1000)
	.deleteAll()
	.typeString("Welcomes You")
	.start();
	}}
	/>
	</div>
);
}

export default App;
