import React from "react";
import { useNavigate,useParams } from "react-router-dom";

const About = () => {
    let navigate = useNavigate();
    let {userName} = useParams();
    return (
        <>
        <h1>About page of {userName}</h1>
        <button onClick = {()=>navigate('/profile')}>Go to home page</button>
        </>

    )
}

export default About