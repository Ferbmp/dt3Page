import React, { useState, useEffect } from 'react';
import Logo from '../../images/logo.png';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo src={Logo} type="image" onClick={toggleHome} />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="design"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sobre
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="foto"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Fotos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="footer"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Contato
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="//www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-rhino/"
              target="_blanc"
            >
              COMPRAR
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
