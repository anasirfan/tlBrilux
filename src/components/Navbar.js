import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import NormalButton from './NormalButton';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 1rem 2rem;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &.scrolled {
    background: rgba(0, 0, 0, 0.8);
    padding: 0.75rem 2rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #4F46E5, #3B82F6);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  padding: 2rem;
  z-index: 40;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavClick = (section) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <NavContainer className={scrolled ? 'scrolled' : ''}>
      <NavContent>
        <Logo
          onClick={() => handleNavClick('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BriLux
        </Logo>
        <NavLinks>
          <NavLink
            onClick={() => handleNavClick('home')}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => handleNavClick('features')}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Features
          </NavLink>
          <NavLink
            onClick={() => handleNavClick('products')}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Products
          </NavLink>
          <NavLink
            onClick={() => handleNavClick('about')}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => handleNavClick('contact')}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Contact
          </NavLink>
        </NavLinks>
        <NavActions>
          <NormalButton onClick={() => handleNavClick('contact')}>
            Get Started
          </NormalButton>
        </NavActions>
      </NavContent>
    </NavContainer>
  );
}

export default Navbar;
