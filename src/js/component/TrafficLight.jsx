import React, {useState} from "react";

const TrafficLight= () =>{
    const [ color, setColor] = useState("red");
    const onClickHandler = (newColor) => {
        setColor(newColor);
    return (
        <div className="col" text-center>
        <div className="d-flex flex-column" bg-dark>
            <div>
            <button type="button" onClick={() => onClickHandler('red')} className={`btn btn-rounded-circle-light bg-danger ${color === 'red' ? 'active' : ''}`}
            ></button>
            </div>
            <div>
            <button type="button" onClick={() => onClickHandler('yellow')} className= {`btn btn-warning rounded-circle-light yellow ${color === 'yellow' ? 'active' : ''}`}></button>
            </div>
            <div>
            <button type="button" onClick={() => onClickHandler('green')}  className= {`=btn btn-success rounded-circle-light green ${color === 'green' ? 'active' : ''}`}></button>
            </div>
        </div>
    </div>
    );
    };
};





export default TrafficLight;
