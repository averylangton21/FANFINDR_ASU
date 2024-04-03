import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background: rgb(253,127,15);
    background: linear-gradient(35deg, rgba(253,127,15,1) 29%, rgba(0,192,163,1) 64%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    z-index: 1;
`;

export const SignUpContainer = styled.div`
    background-color: white;
    height: 80%;
    width: 50%;
    justify-content: center;
    border-radius: 30px;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const SignUpHeader = styled.h1`
    color: black;
    font-size: 40px;
`;

export const SignUpInput = styled.input`
    border-radius: 25px;
    background-color: #d3d3d3;
    border: none;
    width: 50%;
    height: 45px;
    padding-left: 1rem;
    margin: auto;
    font-size: 15px;
    margin: 1rem;
    z-index: 1;
`;

export const SignUpBtn = styled.button`
    cursor: pointer;
    background: linear-gradient(35deg, rgba(253,127,15,1) 29%, rgba(0,192,163,1) 64%);
    color: white;
    width: 35%;
    height: 45px;
    border-radius: 25px;
    border: none;
    padding: 1rem;
`;
export const SignInLink = styled(Link)`
    color: #7f7f7f;
    padding: 1rem;
    font-size: 14px;
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 20px;
`;