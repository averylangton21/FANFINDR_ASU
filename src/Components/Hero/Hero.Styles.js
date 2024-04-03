import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    z-index: 1;
    background-image: linear-gradient(0deg, rgba(243, 147, 20, .8), rgba(234, 147, 20, .8)), url("/home-bg-34.jpg");
`;

export const HeroImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WaveImage = styled.img`
    position: absolute;
    bottom: 0;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.div`
    color: white;
    font-size: 60px;
    font-weight: bold;
`;

export const HeroH2 = styled.div`
    color: white;
    font-size: 60px;
    font-weight: normal;
`;

export const HeroBtnWrapper = styled.nav`
    margin-top: 32px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export const HeroButton = styled(Link)`
    color: white;
    font-size: 20px;
    text-decoration: none;
    margin: auto;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    width: 250px;
    height: 50px;
    background-color: #00C0A3;
    display: flex;
    justify-content: center;
    align-items: center;
`;