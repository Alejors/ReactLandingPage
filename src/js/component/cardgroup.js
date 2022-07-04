import React from "react";
import PropTypes from "prop-types";

import Card from "./card";

const CardGroup = (props) => {
    
    let cardsready = props.cards.map((image, i) => {
        return <Card key={i} imgSrc={image.imgSrc} imgAlt={image.imgAlt} title={image.title} content={image.content} buttonUrl={image.buttonUrl} />
    });
    
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                {cardsready}
            </div>
        </div>
    );
}

CardGroup.propTypes = {
    cards: PropTypes.array
}

export default CardGroup;