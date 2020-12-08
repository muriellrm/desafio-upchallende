import React, { useState, useEffect } from 'react';

import { Car } from './styles';

import redCar from '../../assets/redCar.png';
import redCarLeft from '../../assets/redCarLeft.png';
import redCarRight from '../../assets/redCarRight.png';
import whiteCar from '../../assets/whiteCar.png';
import whiteCarLeft from '../../assets/whiteCarLeft.png';
import whiteCarRight from '../../assets/whiteCarRight.png';
import purpleCar from '../../assets/purpleCar.png';
import purpleCarLeft from '../../assets/purpleCarLeft.png';
import purpleCarRight from '../../assets/purpleCarRight.png';
import blueCar from '../../assets/blueCar.png';
import blueCarLeft from '../../assets/blueCarLeft.png';
import blueCarRight from '../../assets/blueCarRight.png';

interface CarProps {
    position: string;
    carStyle: string;
}

interface SelectedCar {
    carPosition: 'ArrowRight' | 'ArrowDown' | 'ArrowLeft';
}

const CENTER = '42%';
const LEFT = '26%';
const RIGHT = '58%';
const RED_CAR = 'red';
const WHITE_CAR = 'white';
const PURPLE_CAR = 'purple';
const BLUE_CAR = 'blue';


export default function GameCar({ position, carStyle }: CarProps) {

    const [carPosition, setCarPosition] = useState(CENTER);
    const [carImage, setCarImage] = useState(handleInitialCarStyle());

    const car = {
        ArrowLeft(color: string) {
            setCarPosition(LEFT);
            switch (color) {
                case RED_CAR: setCarImage(redCarLeft); break;
                case WHITE_CAR: setCarImage(whiteCarLeft); break;
                case BLUE_CAR: setCarImage(blueCarLeft); break;
                case PURPLE_CAR: setCarImage(purpleCarLeft); break;
            }
        },
        ArrowRight(color: string) {
            setCarPosition(RIGHT);
            switch (color) {
                case RED_CAR: setCarImage(redCarRight); break;
                case WHITE_CAR: setCarImage(whiteCarRight); break;
                case BLUE_CAR: setCarImage(blueCarRight); break;
                case PURPLE_CAR: setCarImage(purpleCarRight); break;
            }
        },
        ArrowDown(color: string) {
            setCarPosition(CENTER);
            switch (color) {
                case RED_CAR: setCarImage(redCar); break;
                case WHITE_CAR: setCarImage(whiteCar); break;
                case BLUE_CAR: setCarImage(blueCar); break;
                case PURPLE_CAR: setCarImage(purpleCar); break;
            }
        }
    }


    function handleInitialCarStyle() {
        switch (carStyle) {
            case RED_CAR: return redCar;
            case WHITE_CAR: return whiteCar;
            case BLUE_CAR: return blueCar;
            case PURPLE_CAR: return purpleCar;
        }
    }

    function selectCar(position: string, color: string){
        const newCar: SelectedCar =  {
            carPosition: 'ArrowDown'
        };
        switch(position) {
            case 'a': newCar.carPosition = 'ArrowLeft'; break;
            case 's': newCar.carPosition = 'ArrowDown'; break;
            case 'd': newCar.carPosition = 'ArrowRight'; break;
            case 'ArrowLeft': newCar.carPosition = position; break;
            case 'ArrowDown': newCar.carPosition = position; break;
            case 'ArrowRight': newCar.carPosition = position; break;
            default: return;
        }
        const carMove = car[newCar.carPosition];
        carMove(color);
    }

    useEffect(() => {
        if (position === carPosition || !position) return;

        selectCar(position, carStyle);

    }, [position])


    return <Car src={carImage} alt="Up Car" position={carPosition} />;

};