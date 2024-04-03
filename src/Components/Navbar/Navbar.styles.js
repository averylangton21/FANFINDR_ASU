import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'white' : 'transparent')};
	border-bottom: ${({ scrollNav }) => (scrollNav ? 'none' : 'solid 1px')};
	border-bottom-color: ${({ scrollNav }) => (scrollNav ? 'transparent' : 'white')};
    margin-bottom: -80px;
	height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: fixed;
	top: 0;
	z-index: 50;
	width: 100%;
	transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 120px;
    width: 100%;
	max-width: 2000px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
`;

export const NavLogo = styled(LinkR)`
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
`;

export const NavIcon = styled.img`
	margin-right: 1rem;
	width: 3rem;
	height: 100px;
	width: 300px;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 100%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	padding: 0;

	@media screen and (max-width: 960px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100vh;
		padding-top: 4rem;
		position: fixed;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		//transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: black;
	}
	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 120px;
	color: ${({ scrollNavItems }) => (scrollNavItems ? 'black' : 'white')};
	transition: color 0.3s ease-in;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(LinkS)`
    font-size: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
	height: 50%;
	margin-top: 1.5rem;
    padding: 0 1rem;
	justify-content: center;
    cursor: pointer;

    &.active {
    border-bottom: 3px solid #00C0A3;
    }

	&:hover {
		color: #00C0A3;
		transition: all 0.3s ease;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		display: flex;
		justify-content: center;
		margin-left: auto;
		margin-right: auto; 
		color: white;
		&:hover {
			color: #fd7f0f;
			transition: all 0.3s ease;
		}

		&.active{
			border-bottom: none;
		}
	}
`;

export const NavBtn = styled.div`
  display: flex;
  height: 40px;
  margin-top: 2.2rem;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
	background-color: #fd7f0f;
    text-decoration: none;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    color: white;
    width: 120px;
    height: 40px;
    border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;