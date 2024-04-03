import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    background-color: #242424;
`;

export const Content = styled.main`
    height: 100%;
    width: 100%;
`;

export const SportingEventsContainer = styled.div`
    background-color: white;
    border-radius: 30px;
`;

export const SchedulePostContainer = styled.div`
    grid-column: 3 / 4;
    grid-row: 2 / 6;
    border-radius: 30px;
    background-color: white;
    margin-right: 20px;
`;

export const AnalyticsContainer = styled.div`
    border-radius: 30px;
    background-color: white;
    margin-right: 20px;
    grid-column: 3 / 4;
    grid-row: 6 / 10;
`;

export const DashboardHeader = styled.h1`
    color: #fd7f0f;
    font-size: 30px;
`;

export const UserPic = styled.img`
    grid-column: 3/4;
    grid-row: 1/2;
    border-radius: 50%;
    cursor: pointer;
    max-width: 45px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 75%;
`;

export const UserSubMenu = styled.div`
    grid-column: 3/4;
    grid-row: 1/2;
    margin-top: 75px;
    margin-left: 500px;
    z-index: 1;
    background-color: #fd7f0f;
    width: 10vw;
    height: 20vh;
    border-radius: 30px;
`;

export const UserInfo = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
`;

export const UserName = styled.h1`
   color: white;
   font-size: 30px;
`;