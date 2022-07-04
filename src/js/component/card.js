import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="col">
            <div className="card mb-3 text-center h-100">
                <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
                <div className="card-footer">
                    <a href={props.buttonUrl} className="btn btn-secondary" target="_blank">Photo Credits</a>
                </div>
            </div>
        </div>
    );
}

export default Card;