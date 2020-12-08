import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormsProps {
    hasError?: boolean;
}


export const GameContainer = styled.section`
    display: flex;

    .background { 
        width: 95%;

    }
`;

export const Form = styled.form<FormsProps>`
    margin-top: 40px;
    display: flex;

    width: 600px;
    height: 300px;
    background-color: rgba(105, 105, 105, 0.9);
    position: absolute;
    top: 30%;
    left: 33%;

    div { 
        flex:1;

        input {
            flex: 1;
            height: 70px;
            width: 60%;
            padding: 0 24px;
            border: 0;
            border-radius: 5px 0 0 5px;
            color: #3a3a3a;
            border: 2px solid #FFF;
            border-right: 0;
            margin-left: 30px;

            ${(props) => props.hasError && css`
                border-color: #c53030;
            `}

            &::placeholder {
                color: #a8a8b3;
            }
        }

        button {
            width: 30%;
            height:70px;
            background: #04d361;
            border-radius: 0px 5px 5px 0px;
            border: 0;
            color: #FFF;
            font-weight: bold;
            margin-right: 30px;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, '#04d361')};
            }
        }

        h1 {
            font-size: 36px;
            font-weight: bold;
            color: #FFF;
            margin: 30px 30px 50px;
        }
    }
`;

export const FormCarSelect = styled.form`

    margin-top: 40px;
    display: flex;

    width: 600px;
    height: 500px;
    background-color: rgba(105, 105, 105, 0.9);
    position: absolute;
    top: 25%;
    left: 33%;

    div { 
        flex:1;

        button {
            width: 50%;
            height: 70px;
            background: #04d361;
            border-radius: 5px;
            border: 0;
            color: #FFF;
            font-weight: bold;
            margin-top: 30px;
            margin-left: 25%;
            transition: background-color 0.2s;


            &:hover {
                background: ${shade(0.2, '#04d361')};
            }

            &:disabled {
                border: 1px solid #999999;
                background-color: #cccccc;
                color: #666666;
            }

        }

        h1 {
            font-size: 36px;
            font-weight: bold;
            color: #FFF;
            margin: 30px 30px 50px;
        }
    }


fieldset {
        flex: 1;
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        justify-items: space-between;
        border: none;

        label {
            margin-left: 25px;
            margin-top: 10px;

        }


        label > input{
            visibility: hidden;
        }
        label > input + img{
            cursor:pointer;
            border:4px solid rgba(105, 105, 105, 0.1);
            border-radius:15px;
            padding:10px;
        }
        label > input:checked + img{
            border:4px solid red;
        }
    }
`;



export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
    margin-left: 30px;
    text-shadow: 1px 1px 0px black;
`;

export const CountDown = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 44%;
    height: 90%;
    position: absolute;

    h1 {
        font-size: 100px;
        position: absolute;
        color: #FFF;
    }
    
    text-shadow: 0px 4px 12px black;
`;

export const Pause = styled.div`
    display: flex;

    background-color: rgba(105, 105, 105, 0.9);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45.5%;
    height: 90.5%;
    position: absolute;

    h1 {
        font-size: 100px;
        position: absolute;
        color: #FFF;
    }

    h2 {
        margin-top: 30%;
        font-size: 30px;
        position: absolute;
        color: #FFF;
    }
    
    text-shadow: 0px 4px 12px black;
`;