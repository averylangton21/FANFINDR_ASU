import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutContainer = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const InnerContainer = styled.div`
    display: flex;
    margin-top: 120px;
    height: 60vh;
    width: 70vw;
    align-items: center;
    justify-content: space-evenly;
`;

export const PhoneImgContainer = styled.div`
    display: flex;
    height: 60vh;
    width: 20vw;
    align-items: center;
    justify-content: center;
    background: url('./ff phone.PNG');
    background-repeat: no-repeat;
    background-position: center;
    background-size: initial;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    width: 25vw;
    align-items: center;
    justify-content: space-evenly;
    align-self: flex-start;
`;

export const LeftIconSubContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 100px;
    width: 500px;
`;

export const RightIconSubContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100px;
    width: 500px;
`;

export const IconSquare = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 150px;
    align-items: center;
    justify-content: center;
`;

export const PageHeader = styled.h1`
    color: black;
    font-size: 50px;
    margin-bottom: 4rem;
    font-weight: bold;
    animation-delay: 0.1s;
    animation-name: fadeInUp;
`;

export const LeftIconTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 350px;
`

export const RightIconTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: flex-end;
    height: 100px;
    width: 350px;
`

export const IconTextHeader = styled.h4`
    color: black;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding-bottom: 1rem;
`
export const IconText = styled.label`
    color: black;
    font-size: 16px;
    font-weight: normal;
`