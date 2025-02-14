import React, { useState } from "react";

//create your first component
const Home = () => {
    // Definir el estado inicial con useState
    const [color, setColor] = useState("rojo");

    return (
        <div className="semaforo">
            <div 
                onClick={() => setColor("rojo")} 
                className={"rojo" + (color === "rojo" ? " encendido" : "")}
            ></div>
            <div 
                onClick={() => setColor("amarillo")} 
                className={"amarillo" + (color === "amarillo" ? " encendido" : "")}
            ></div>
            <div 
                onClick={() => setColor("verde")} 
                className={"verde" + (color === "verde" ? " encendido" : "")}
            ></div>
        </div>
    );
};

export default Home;