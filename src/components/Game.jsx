import { useState, useEffect } from "react";
import '../App.css'
import Field from "./Field";
import { useWinner } from "../hooks/useWinner";
import Information from "./Information";

export default function Game() {

    const [field, setField] = useState(Array(9).fill(null));
	const [currentPlayer, setCurrentPlayer] = useState('x');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

    const winner = useWinner(field)

    useEffect(() => {
        if(winner) {
            setIsGameEnded(true);
        } else if(!field.includes(null)) {
            setIsDraw(true);
        } else {
            setIsDraw(false)
        }
    }, [field, winner])

	const handleClick = (index) => {
        if (field[index] || winner) return
        field[index] = currentPlayer
        setField([...field])
        setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
        // let newField = [...field];
        // if (winner || newField[index]) return
        // newField[index] = currentPlayer ? 'x' : 'o'
        // setField(newField)
        // setCurrentPlayer(!currentPlayer)
	}

    const restartGame = () => {
        setField(Array(9).fill(null))
        setCurrentPlayer('x')
        setIsGameEnded(false)
        setIsDraw(false)
    }

    return(
        <div className='wrapper'>
            <Field field={field} setSquareValue = {handleClick}/>
           <Information winner={winner} currentPlayer={currentPlayer} isDraw={isDraw} />
            <button 
            className='startNewGameBtn' 
            onClick={restartGame}>Начать заново</button>
        </div>
    )
}