import React, { useState } from "react";

function Tile ({ 
    image,
    name,
    specialty,
    weight,
    greased,
    medal,
}) {
    const [info, setInfo] = useState(true);

    function handleInfo() {
        setInfo((info) => !info);
    }

    // return ('Specialty: ', specialty)
    const addInfo = () => {
        return (
            <div>
                <p>{"Specialty: " + specialty}</p>
                <p>{"Weight: " + weight}</p>
                <p>{"Greased: " + greased}</p>
                <p>{"Highest Medal Achieved: " + medal}</p>
            </div>
        );
    }

    const tile = info ? null : addInfo()
    
    return (
        <div className="ui grid container">
        <div className="column">
            <div className="ui fluid card" onClick={handleInfo}>
            <div className="image">
                <img src={ image } alt={"Hog named " + name}/>
            </div>
            <div className="content">
                <p className="header">{ name }</p>
                <span>{tile}</span>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Tile;