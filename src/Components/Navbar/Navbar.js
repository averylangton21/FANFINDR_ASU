//Components
import React, { useEffect } from 'react';
import "./Navbar.styles.js";
import { useState } from 'react';
import { Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu, MobileIcon, NavIcon, NavBtn, NavBtnLink } from './Navbar.styles.js';
import { animateScroll as scroll } from 'react-scroll';

//Icons
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';


const Navbar = () => {

    const [scrollNav, setScrollNav] = useState(false);
    const [scrollNavItems, setScrollNavItems] = useState(false);
    const [scrollLogo, setScrollLogo] = useState('./fanfindrwhite.png');
    const [show, setShow] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    const changeNavItems = () => {
        if (window.scrollY >= 80) {
            setScrollNavItems(true);
        } else {
            setScrollNavItems(false);
        }
    }

    const changeImage = () => {
        if (window.scrollY >= 80) {
            setScrollLogo('./fanfindrblack.png');
        } else {
            setScrollLogo('./fanfindrwhite.png');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        window.addEventListener('scroll', changeNavItems);
        window.addEventListener('scroll', changeImage);

    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome} >

                        <NavIcon
                            id='myImage'
                            src={scrollLogo}
                            style={{
                                height: 100,
                                width: 300,
                            }}
                        />

                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {show ? <FaTimes /> : <CgMenuRight />}
                    </MobileIcon>
                    <NavMenu show={show}>
                        <NavItem scrollNavItems={scrollNavItems}>
                            <NavLinks to='home'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem scrollNavItems={scrollNavItems}>
                            <NavLinks to='about'
                                smooth={true} duration={500} spy={true} exact='true' offset={-280}
                            >
                                Features
                            </NavLinks>
                        </NavItem>
                        <NavItem scrollNavItems={scrollNavItems}>
                            <NavLinks to='contact'
                                smooth={true} duration={500} spy={true} exact='true' offset={0}
                            >
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/login'>Sign In</NavBtnLink>
                    </NavBtn>
                    {/*<NavBtn>
                        <NavBtnLink to='/dashboard'>Dashboard</NavBtnLink>
                    </NavBtn>*/}
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    );
}

export default Navbar;