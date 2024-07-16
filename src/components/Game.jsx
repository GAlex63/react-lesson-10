import { useState, useEffect } from "react";
import '../App.css'
import Field from "./Field";
import Information from "./Information";
import { useWinner } from "../hooks/useWinner";
import { setField, setCurrentPlayer, setIsGameEnded, setIsDraw, restartGame} from '../actions'
import { store } from '../store'

export default function Game() {
    const [state, setState] = useState(store.getState())

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState())
        })
        return () => unsubscribe()
    }, [])

    const winner = useWinner(state.field)

    useEffect(() => {
        if(winner) {
            store.dispatch(setIsGameEnded(true));
        } else if(!state.field.includes(null)) {
            store.dispatch(setIsDraw(true));
        } else {
            store.dispatch(setIsDraw(false))
        }
    }, [state.field, winner])

	const handleClick = (index) => {
        let newField = [...state.field];
        if (winner || state.field[index]) return
        newField[index] = state.currentPlayer ? 'x' : 'o'
        store.dispatch(setField(newField))
        store.dispatch(setCurrentPlayer(!state.currentPlayer))
        
	}

    const handleRestartGame = () => {
        store.dispatch(restartGame())
    }

    return(
        <div className='wrapper'>
            <Field field={state.field} setSquareValue = {handleClick}/>
           <Information winner={winner} currentPlayer={state.currentPlayer} isDraw={state.isDraw} />
            <button 
            className='startNewGameBtn' 
            onClick={handleRestartGame}>Начать заново</button>
        </div>
    )
}