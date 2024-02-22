import React from "react";

export default function Characterisctics(type, mean) {
    return(
        <div className="characterisctic">
            <h6>{type}</h6>
            <p>{mean}</p>
        </div>
    )
}