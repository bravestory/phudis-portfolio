import React from "react";
import './Card.css';

function Card({title,imageUrl,body}){
    return(
        <div className="HighSchool">
            <div className="HighSchool-image">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="HighSchool-content">
                <div className="HighSchool-title">
                    <h3>{title}</h3>
                </div>
                <div className="HighSchool-body">
                    <p>{body}</p>
                </div>
                <div>
                    <p>Date: 2016-2019</p>
                </div>
            </div>
        </div>
    )
}

export default Card