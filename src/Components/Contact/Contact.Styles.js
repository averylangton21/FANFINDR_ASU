import styled from "styled-components";

export const ContactContainer = styled.div`
    padding-left: 3rem;
    height: 100vh;
    overflow: hidden;
    display: flex;
    margin-top: 120px;
`;

export const InfoContainer = styled.div`
    display: flex;
    margin-top: 120px;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    width: 45vw;
`;

export const InfoHeaderContainer = styled.div`
    height: 22vh;
    width: 45vw;
    margin-bottom: 0;
`;

export const InfoHeader = styled.h1`
    color: black;
    font-size: 40px;
    padding-left: 2rem;
`;

export const InfoP = styled.p`
    color: black;
    font-size: 20px;
    padding-left: 2rem;
    font-weight: normal;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50vh;
    width: 45vw;
`;

export const IconSubContainer = styled.div`
    display: flex;
    height: 100px;
    width: 45vw;
`;

export const IconBox = styled.div`
    display: flex;
    background-color: #7a40f2;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    margin-left: 2rem;
`;

export const IconStyle = styled.label`
    color: white;
    font-size: 30px;
`;

export const IconHeader = styled.label`
    padding-left: 1rem;
    color: black;
    font-size: 20px;
    font-weight: bold;
`;

export const IconText = styled.label`
    padding-left: 1rem;
    color: black;
    font-size: 15px;
    font-weight: normal;
`;

export const IconTextContainer = styled.div`
    height: 100px;
    width: 500px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0;
    overflow: hidden;
`;

export const FormContainer = styled.div`
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 55vw;
    margin-top: 120px;
`;

export const FormSquare = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fd7f0f;
    border-radius: 20px;
    height: 72vh;
    width: 40vw;
    margin-bottom: 150px;
`;

export const FormInput = styled.input`
    margin: 1rem;
    width: 70%;
    height: 6%;
    border-radius: 5px;
    border: none;
    font-size: 15px;
`;

export const FormMessageInput = styled.textarea`
    margin: 1rem;
    width: 70%;
    height: 30%;
    border-radius: 5px;
    border: none;
    font-family: 'Mulish', sans-serif;
    font-size: 15px;
`;

export const FormSubmitBtn = styled.button`
    margin: 1rem;
    width: 70%;
    height: 6%;
    border-radius: 5px;
    border: none;
    background-color: #7a40f2;
    color: white;
`;