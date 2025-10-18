import React from "react";
import aboutimage from '../images/about.png'

function About() {
    return (
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-text">
                <h1>Nossa História</h1>
                <p>Na Gym, acreditamos que cuidar do corpo é o primeiro passo para transformar
                   a mente e conquistar uma vida mais equilibrada. Fundada em 2015,
                   nossa academia nasceu com o propósito de oferecer um ambiente acolhedor,
                   moderno e inspirador — onde cada aluno se sinta motivado a atingir seus objetivos,
                   seja ganhar massa, perder peso ou simplesmente viver com mais disposição.
                </p>
                <button>SAIBA MAIS</button>
            </div>
        </div>
    )
}

export default About;