import React from "react";
import './Card.css';

function CardSMC({title,imageUrl,body}){
    return(
        <div className="smc">
            <div className="smc-image">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="smc-content">
                <div className="smc-title">
                    <h3>{title}</h3>
                </div>
                <div className="smc-body">
                    <p>{body}</p>
                </div>
                <div>
                    <p>Date: 2019-2021</p>
                </div>
            </div>
        </div>
    )
}

export default CardSMC