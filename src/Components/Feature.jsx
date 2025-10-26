import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'

function Feature() {
    return (
        <section id="features">
            <h1>PROGRAMAS</h1>
            <div className="a-container">
                <Featurebox image={fimage1} title="MUSCULAÇÃO">Aumente mobilidade, resistência e performance do dia a dia.</Featurebox>
                <Featurebox image={fimage2} title="TREINO FUNCIONAL">Aumente mobilidade, resistência e performance do dia a dia.</Featurebox>
                <Featurebox image={fimage3} title="HIPERTROFIA">Planos específicos para hipertrofia com acompanhamento.</Featurebox>
                <Featurebox image={fimage4} title="CARDIO">Sessões para condicionamento e queima calórica eficiente.</Featurebox>
            </div>
        </section>
    )
}

export default Feature;