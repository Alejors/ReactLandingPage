import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card my-3 mx-4 justify-content-center">
            <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
            </div>
            <div className="card-footer">
                <a href={props.buttonUrl} className="btn btn-primary">Photo Credits</a>
            </div>
        </div>
    );
}

export default Card;