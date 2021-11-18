import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function landing() {
    return (
        <div className="landing">
            
            <Link to="/home">
            <button>ir a inicio</button>
            </Link>
        </div>
    )
}

export default landing;
