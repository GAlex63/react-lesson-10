import React from 'react'
import '../App.css'


export default function Information({winner, currentPlayer, isDraw}) {

    const endGame = () => {
        if (winner) {
            return 'Победитель: ' + winner.winner
        }
        if (!winner && isDraw) {
            return 'Ничья'
        } else { 
            return 'Сейчас ходит: ' + (currentPlayer ? 'x' : 'o')
        }
    }

    return(
        <p> {endGame()} </p>
    )
}