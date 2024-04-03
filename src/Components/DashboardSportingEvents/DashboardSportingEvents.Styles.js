import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 75vh;
    width: 40vw;
    border-radius: 30px;
    padding: 1rem;
`;

export const HeaderContainer = styled.div`
    width: 40vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
`;

export const Header = styled.h1`
    color: black;
    font-size: 27px;
    font-weight: normal;
`;

export const SportsDropdownContainer = styled.div`
   display: flex;
`;

export const SportsDropdown = styled.select`
    height: 45px;
    width: 175px;
    border-radius: 10px;
    margin-top: 1rem;
    background-color: #fd7f0f;
    border: none;
    color: white;
    font-size: 17px;
    padding-left: .5rem;
    padding-right: .5rem;
`;

export const NetworksDropdownContainer = styled.div`
    height: 45px;
    width: 175px;
    border-radius: 10px;
    margin-top: 1rem;
    background-color: #fd7f0f;
`;

export const ViewAllLink = styled(Link)`
    color: #fd7f0f;
    align-self: center;
    text-decoration: none;
`;

export const DateContainer = styled.div`
    height: 40px;
    width: 175px;
    //background-color: white;
    //border-radius: 2px;
    //outline-style: solid;
    //outline-width: thin;
    //outline-color: #fd7f0f;
    align-items: center;
    justify-content: center;
`;

export const GameScheduleContainer = styled.div`
    width: 100%;
    height: 55vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    margin-top: 1rem;
`;

export const GamesContainer = styled.div`
    width: 50%;
    height: 55vh;
    display: flex;
    background-color: blue;
`;

export const GamesText = styled.li`
   color: black;
   text-decoration: none;
   list-style: none;
`;

export const ViewAllContainer = styled.div`
    width: 100%;
    height: 4vh;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    justify-content: center;
`;