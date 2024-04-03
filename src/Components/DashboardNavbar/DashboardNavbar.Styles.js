import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.nav`
    width: 100vw;
    height: 100vh;
`;

export const SidebarClosed = styled.nav`
    background-color: #fd7f0f;
    height: 100vh;
    width: 125px;
    display: flex;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    transition: width 0.3s ease-in-out;
`;

export const SidebarHeaderContainer = styled.div`
	display: flex;
	height: 15vh;
    width: 300px;
    border-radius: 20px;
`;

export const SidebarHeader = styled(Link)`
	font-size: 50px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    margin: auto;
`;

export const SidebarMenuContainer = styled.div`
	display: flex;
    justify-content: center;
    align-items: normal;
    flex-direction: column;
	height:60vh;
    width: 300px;
    border-radius: 20px;
`;

export const SidebarItem = styled(Link)`
	color: white;
    font-size: 25px;
    text-decoration: none;
    vertical-align: middle;
    padding: 2rem;
    margin-left: 1rem;

    &:hover {
		color: #7a40f2;
		transition: all 0.3s ease;
	}
`;

export const SidebarIcon = styled(Link)`
	color: white;
    vertical-align: middle;
    font-size: 27px;
    padding: .1rem;
`;

export const SidebarLogoutContainer = styled.div`
	display: flex;
    position: absolute;
    bottom: 0;
	height: 15vh;
    width: 15vw;
    border-radius: 20px;
`;