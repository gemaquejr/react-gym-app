import React from "react";

function Featurebox({ image, title, children }) {
    return (
            <article className="a-box">
                <div className="a-b-img">
                    <img src={image} alt={title} />
                </div>
                <div className="a-b-text">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </article>
    )
}

export default Featurebox;