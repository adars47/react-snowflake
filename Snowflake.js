import { useState } from 'react';
import './SnowFlake.css';

const SnowFlakes = () =>{

    const [score, setScore] = useState(0);
    const caught = () =>{
        setScore(score+1);
    };

    return (
    <>
        <button className="kc_fab_main_btn">{score}</button>
        <div className="snowflakes" aria-hidden="true">
        {Array(12).fill(1).map((value,index)=>{
            return (
            <div className="snowflake" key={index}>
                <div className="inner" onClick={caught}>❅</div>
            </div>)
        })}
        </div>
    </>
    );
}

export default SnowFlakes;