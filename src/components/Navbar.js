import React, { useState } from 'react';
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
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const NavButton = styled(NormalButton)`
  @media (max-width: 768px) {
    display: none;
  }
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
  z-index: 100;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }
`;

const MenuBar = styled(motion.span)`
  width: 24px;
  height: 2px;
  background-color: white;
  display: block;
  transform-origin: center;
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  padding: 5rem 2rem;
  z-index: 90;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.5rem;
  opacity: 0.9;
  
  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

const MobileButton = styled(NormalButton)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
  }
`;

function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section) => {
    if (onNavigate) {
      onNavigate(section);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = ['Home', 'Features', 'Products', 'About', 'Contact'];

  return (
    <NavContainer className={isScrolled ? 'scrolled' : ''}>
      <NavContent>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavigation('home')}
        >
          BriLux
        </Logo>

        {/* Desktop Navigation - Centered */}
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item}
              onClick={() => handleNavigation(item.toLowerCase())}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item}
            </NavLink>
          ))}
        </NavLinks>

        <NavActions>
          <NavButton onClick={() => handleNavigation('contact')}>
            Get Started
          </NavButton>

          {/* Hamburger Menu Button */}
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            animate={isMobileMenuOpen ? "open" : "closed"}
          >
            <MenuBar animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              translateY: isMobileMenuOpen ? 8 : 0
            }} />
            <MenuBar animate={{
              opacity: isMobileMenuOpen ? 0 : 1
            }} />
            <MenuBar animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              translateY: isMobileMenuOpen ? -8 : 0
            }} />
          </MobileMenuButton>
        </NavActions>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {navItems.map((item) => (
                <MobileNavLink
                  key={item}
                  onClick={() => handleNavigation(item.toLowerCase())}
                >
                  {item}
                </MobileNavLink>
              ))}
              <MobileButton onClick={() => handleNavigation('contact')}>
                Get Started
              </MobileButton>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContent>
    </NavContainer>
  );
}

export default Navbar;
