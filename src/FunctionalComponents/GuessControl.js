import React, { useState } from 'react';
import Button from '../Button';

const GuessControl = ({ onGuess }) => {
    const [guess, setGuess] = useState('');

    const handleInputChange = (event) => {
        setGuess(event.target.value);
    };

    const onSubmitGuess = () => {
        onGuess(Number(guess));
        setGuess('');
    };

    return (
        <div>
            <input 
                type="number" 
                value={guess} 
                onChange={handleInputChange} 
            />
            <Button onClick={onSubmitGuess}>Guess</Button>
        </div>
    );
};

export default GuessControl;