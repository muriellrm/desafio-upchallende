import React, { useState, useEffect, FormEvent } from 'react';

import { Form, Error } from './styles';
import scenario from '../../assets/road.png';

const Menu: React.FC = () => {

    const [playerName, setPlayerName] = useState('');
    const [inputError, setInputError] = useState('');

    function handleNewGame(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!playerName) {
            setInputError('Digite o nome do corredor!');
            return;
        }

        setInputError('');

    }

    return (
        <>
            <img
                className="background"
                src={scenario}
                alt="Cenário"
            />
            <Form hasError={!!inputError} onSubmit={handleNewGame}>
                <input
                    value={playerName}
                    onChange={event => setPlayerName(event.target.value)}
                    placeholder="Digite o nome do corredor." />
                <button type="submit">Pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
        </>
    )
};

export default Menu;


