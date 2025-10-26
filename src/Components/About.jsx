import React from "react";
import aboutimage from '../images/about.png'
import Button from "./Button";

function About() {
    return (
        <section id="about">
            <div className="about-image">
                <img src={aboutimage} alt="História da academia" />
            </div>
            <div className="about-text">
                <h1>Nossa História</h1>
                <p>Na Gym, acreditamos que cuidar do corpo é o primeiro passo para transformar
                   a mente e conquistar uma vida mais equilibrada. Fundada em 2015,
                   nossa academia nasceu com o propósito de oferecer um ambiente acolhedor,
                   moderno e inspirador — onde cada aluno se sinta motivado a atingir seus objetivos,
                   seja ganhar massa, perder peso ou simplesmente viver com mais disposição.
                </p>
                <div className="about-btn">
                    <Button onClick={() => alert('Em breve: página com mais detalhes!')}>
                        {"Saiba Mais"}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default About;