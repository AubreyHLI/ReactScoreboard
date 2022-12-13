import React, { useContext, useRef } from 'react';
import ScoreboardContext from './Context';

const AddPlayerForm = () => {
    let context = useContext(ScoreboardContext);

    const userInput = useRef();
    
    const handleFormSubmit = (e) => {
        e.preventDefault();  
        context.actions.addPlayer( userInput.current.value );
        e.currentTarget.reset();  // reset the input field value to ""
    }

    return (
        <form className='addplayerform' onSubmit={ (event) => handleFormSubmit(event) }>
            <input type="text" ref={ userInput } placeholder="Enter a name" />
            <input type="submit" value="Add Player" />
        </form>
    );
}

export default AddPlayerForm;