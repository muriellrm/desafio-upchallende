import React, { FormEvent, useEffect, useState } from 'react';

import scenario from '../../assets/road.gif';
import menu from '../../assets/road.png';
import GameCar from '../../components/Car';

import redCar from '../../assets/redCarSelect.png';
import whiteCar from '../../assets/whiteCarSelect.png';
import blueCar from '../../assets/blueCarSelect.png';
import purpleCar from '../../assets/purpleCarSelect.png';


import { GameContainer, Form, FormCarSelect, Error, CountDown, Pause } from './styles';

const Game: React.FC = () => {

    const [carPosition, setCarPosition] = useState('');
    const [carStyle, setCarStyle] = useState('');
    const [startGame, setStartGame] = useState(false);
    const [selectCarStyle, setSelectCarStyle] = useState(false);
    const [startRun, setStartRun] = useState(false);
    const [pauseGame, setPauseGame] = useState(false);
    const [countDown, setCountDown] = useState(-2);
    const [playerName, setPlayerName] = useState('');
    const [inputError, setInputError] = useState('');

    useEffect(() => {
        function handleKey(event: KeyboardEvent) {
            if (startGame) {
                switch (event.key) {
                    case 'Escape': setPauseGame(true); break;
                    case 'Enter': setPauseGame(false); break;
                    default: setCarPosition(event.key); break;
                }
            }
        }
        document.addEventListener('keydown', handleKey);
    }, [startGame])

    useEffect(() => {
        if (startRun)
            countDown > -1 && setTimeout(() => setCountDown(countDown - 1), 1000);

        if (countDown === -1) {
            setStartGame(true);
        }
    }, [countDown])


    function handleNewGame(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStartRun(true);
        setCountDown(3);
    }

    function handleSelectCar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!playerName) {
            setInputError('Digite o nome do corredor!');
            return;
        }
        setSelectCarStyle(true);
        setInputError('');
    }

    return (
        <>
            <GameContainer>
                {!startGame ?
                    (
                        <>
                            <img
                                className="background"
                                src={menu}
                                alt="Cenário"
                            />
                            {!startRun ? (
                                <>
                                    {!selectCarStyle ? (

                                        <Form hasError={!!inputError} onSubmit={handleSelectCar}>
                                            <div>
                                                <h1>Curta grandes emoções com o Up Challenge</h1>
                                                <input
                                                    value={playerName}
                                                    onChange={event => setPlayerName(event.target.value)}
                                                    placeholder="Digite o nome do corredor." />
                                                <button type="submit">Continuar</button>

                                                {inputError && <Error>{inputError}</Error>}
                                            </div>
                                        </Form>

                                    ) : (
                                            <FormCarSelect onSubmit={handleNewGame}>
                                                <div>
                                                    <h1>Selecione um carro</h1>
                                                    <fieldset>
                                                        <label >
                                                            <input
                                                                type='radio'
                                                                value='red'
                                                                checked={carStyle === 'red'}
                                                                onChange={event => setCarStyle(event.target.value)} />
                                                            <img src={redCar} alt="Masculino" />
                                                        </label>
                                                        <label>
                                                            <input
                                                                type='radio'
                                                                value='white'
                                                                checked={carStyle === 'white'}
                                                                onChange={event => setCarStyle(event.target.value)} />
                                                            <img src={whiteCar} alt="Masculino" />
                                                        </label>
                                                        <label>
                                                            <input
                                                                type='radio'
                                                                value='purple'
                                                                checked={carStyle === 'purple'}
                                                                onChange={event => setCarStyle(event.target.value)} />
                                                            <img src={purpleCar} alt="Masculino" />
                                                        </label>
                                                        <label >
                                                            <input
                                                                type='radio'
                                                                value='blue'
                                                                checked={carStyle === 'blue'}
                                                                onChange={event => setCarStyle(event.target.value)} />
                                                            <img src={blueCar} alt="Masculino" />
                                                        </label>
                                                        <button type="submit" disabled={!carStyle && true}>Start Run</button>
                                                    </fieldset>
                                                </div>
                                            </FormCarSelect>
                                        )}
                                </>
                            ) : (
                                    <CountDown>
                                        <h1>{countDown === 0 ? 'RUN!!!' : countDown}</h1>
                                    </CountDown>
                                )}
                        </>
                    ) : (
                        <>
                            {!pauseGame ? (
                                <>
                                    <img
                                        className="background"
                                        src={scenario}
                                        alt="Cenário"
                                    />
                                    <GameCar
                                        position={carPosition}
                                        carStyle={carStyle}
                                    />
                                </>
                            ) : (
                                    <>
                                        <img
                                            className="background"
                                            src={menu}
                                            alt="Cenário"
                                        />
                                        <Pause>
                                            <h1>Jogo Pausado!</h1>
                                            <h2>Pressione Enter continuar a correr!</h2>
                                        </Pause>
                                    </>
                                )}
                        </>
                    )
                }
            </GameContainer>
        </>
    )
}

export default Game;

