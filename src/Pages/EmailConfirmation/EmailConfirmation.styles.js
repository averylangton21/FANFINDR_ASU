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

export const ConfirmContainer = styled.div`
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

export const ConfirmHeader = styled.h1`
    color: black;
    font-size: 40px;
`;

export const Info = styled.p`
    color: black;
    font-size: 16px;
`;

export const CodeInput = styled.input`
    border-radius: 25px;
    background-color: #d3d3d3;
    border: none;
    width: 50%;
    height: 45px;
    padding-left: 1rem;
    font-size: 15px;
    margin: 1rem;
`;

export const ConfirmButton = styled.button`
    cursor: pointer;
    background: linear-gradient(35deg, rgba(253,127,15,1) 29%, rgba(0,192,163,1) 64%);
    color: white;
    width: 35%;
    height: 45px;
    border-radius: 25px;
    border: none;
    margin: 1rem;
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 20px;
`;

export const ResendLink = styled.p`
    color: black;
    font-size: 16px;
    cursor: pointer;

    &:hover {
		color: #00C0A3;
		transition: all 0.3s ease;
	}
`;