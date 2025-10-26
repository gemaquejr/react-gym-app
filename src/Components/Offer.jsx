import React from "react";
import Button from "./Button";

function Offer() {
    return (
        <section id="offer">
            <div className="pr-heading">
                <h1>UMA GRANDE <span>PROMOÇÃO</span> PARA O INÍCIO DO VERÃO</h1>
                <p className="details">Que tal uma promoção imperdível para voltar a treinar ainda neste mês?</p>
                <div className="pr-btns">
                    <Button type="submit" >
                        {"Confira"}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Offer;