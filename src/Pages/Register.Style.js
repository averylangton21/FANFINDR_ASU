import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background: rgb(253,127,15);
    background: linear-gradient(35deg, rgba(253,127,15,1) 29%, rgba(0,192,163,1) 64%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 1;
`;

export const Form = styled.form`
height: 80vh;
width: 50vw;
justify-content: center;
align-items: center;
display: flex;
position: relative;
flex-direction: column;
`;

export const SignUpContainer = styled.div`
    background-color: white;
    height: 80vh;
    width: 50vw;
    justify-content: center;
    border-radius: 30px;
    align-items: center;
    display: flex;
    position: relative;
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
    font-size: 15px;
    margin: 1rem;
`;

export const Info = styled.p`
    color: white;
    font-size: 16px;
    background: black;
    border-radius: 10px;
    padding: 0.2rem;
`;

export const SignUpBtn = styled.button`
    cursor: pointer;
    background: linear-gradient(35deg, rgba(253,127,15,1) 29%, rgba(0,192,163,1) 64%);
    color: white;
    width: 35%;
    height: 45px;
    border-radius: 25px;
    border: none;
    margin: 1rem;
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
export const DropBox = styled.div`
    border: 1px solid #d3d3d3;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 9%;
    width: 45%;
    padding: 1rem;
`;

export const DropBox2 = styled.div`
    border: 1px dashed #7a40f2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    height: 100%;
`;

export const DropText = styled.p`
    color: black;
    font-size: 15px;
`;