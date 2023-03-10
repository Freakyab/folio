import React from "react";
import "./Typing.css";
import TypeWriterEffect from 'react-typewriter-effect';

function Type()
{
    return (

        <h1 className="type">
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'Trebuchet MS',
          fontWeight: 800,
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          "I am Aryan",
            'I am a Web Developer',
          "I am a Programmer",
            "I am a Learner",
            "I am a Photographer",
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={60}
      />
        </h1>
    )
}

export default Type;