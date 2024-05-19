import '../App.css'
import Square from "./Square";

export default function Field({field, setSquareValue}) {

    return(
        <div className='field'>
            {field.map((square, index) => {
                return (
                    <span key={index}>
                        <Square value={square} setSquareValue = {() => setSquareValue(index)} />
                    </span>
                )
            })}
        </div>
    )

}