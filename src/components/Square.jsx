import React from "react";
import '../App.css'

export default function Square({value, setSquareValue }) {
    return(
        <button className='square' onClick={setSquareValue}>{value}</button>
    )
}