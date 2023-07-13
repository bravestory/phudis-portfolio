import React from "react";
import './Card.css';

function CardUCSC({title,imageUrl,body}){
    return(
        <div className="UCSC">
            <div className="UCSC-image">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="UCSC-content">
                <div className="UCSC-title">
                    <h3>{title}</h3>
                </div>
                <div className="UCSC-body">
                    <p>{body}</p>
                </div>
                <div>
                    <p>Date: 2021-2023</p>
                </div>
            </div>
        </div>
    )
}

export default CardUCSC