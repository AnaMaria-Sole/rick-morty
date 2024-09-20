import styled from "styled-components";

export const AliveChar = styled.span`
        width: 200px;
        height: 220px;
        background-color: ${props=> props.isAlive ? " #a7c957" : "#ffbaba"};;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        border-radius: 0.5em;
        margin-bottom:4em;
    img{
        width: 150px;
        border-radius: 50%;
        margin-top: 0.2em;
    }
    h2{
        color: ${props=> props.isAlive ? "#2b2b2b" : "#492C47"};
        font-size: 20px;
    }
    p{
        color: ${props=> props.isAlive ? " #6a994e" : "#a70000"};;
    }
`

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`