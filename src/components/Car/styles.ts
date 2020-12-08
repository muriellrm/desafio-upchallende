import styled from 'styled-components';


interface CarProps {
    position: string;
}

export const Car = styled.img<CarProps>`
    width: 254px;
    height: 164px;

    position: absolute;
    top: 68%;
    left: ${(props)=> props.position};
`;