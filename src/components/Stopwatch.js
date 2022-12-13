import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    // timer task
    useEffect(() => {
        console.log('Running side effect!');
        let intervalID;
        if (isRunning) {
            intervalID = setInterval(() => {
                    setElapsedTime( prevElapsedTime => prevElapsedTime + 1);
                    console.log('tick');
            }, 1000);     
        }
        return () => { // this cleanup function clears the setInterval method when the component is removed, prevent memory leak
            clearInterval( intervalID );
            console.log('clean up');
        }
    }, [isRunning]);

    return (
        <div className='stopwatch'>
            <h6>Stopwatch</h6>
            <span className='stopwatch-time'>{ elapsedTime }</span>
            <button onClick={ () => setIsRunning( prevIsRunning => !prevIsRunning) }>{ isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={ () => setElapsedTime(0) }>Reset</button>
        </div>
    );
}

export default Stopwatch;

