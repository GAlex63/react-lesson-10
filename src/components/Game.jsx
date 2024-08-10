import { Component } from "react";
import '../App.css'
import Field from "./Field";
import Information from "./Information";
import { setField, setCurrentPlayer, restartGame} from '../actions'
import { store } from '../store'


function getWinner(buttons) {
    const WIN_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (let i = 0; i < WIN_PATTERNS.length; i++) {
        const [a, b, c] = WIN_PATTERNS[i];
        if (buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
        return {winner: buttons[a]};
        }
    }
    
    return null
}

export default class Game extends Component {

    constructor(props) {
        super(props)

        this.state = {
            field: store.getState().field,
            currentPlayer: store.getState().currentPlayer,
            isDraw: store.getState().isDraw,
        }
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                field: store.getState().field,
                currentPlayer: store.getState().currentPlayer,
                isDraw: store.getState().isDraw,
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    handleClick = (index) => {
        const { field, currentPlayer } = store.getState()
        const winnerInfo = getWinner(field)
        if (winnerInfo || field[index]) return
        const newField = [...field]
        newField[index] = currentPlayer ? 'x' : 'o'

        store.dispatch(setField(newField))
        store.dispatch(setCurrentPlayer(!currentPlayer))
    }

    handleRestartGame = () => store.dispatch(restartGame())

    render() {
        const winnerInfo = getWinner(this.state.field)
        return(
            <div className='wrapper'>
                <Field 
                field={this.state.field} 
                setSquareValue = {this.handleClick}
                />
               <Information 
               winner={winnerInfo} 
               currentPlayer={this.state.currentPlayer} 
               isDraw={this.state.isDraw} 
               />
                <button 
                className='startNewGameBtn' 
                onClick={this.handleRestartGame}>Начать заново</button>
            </div>
        )
    }
}

