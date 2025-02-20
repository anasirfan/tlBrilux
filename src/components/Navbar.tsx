import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

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
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  cursor: pointer;
  padding: 0.5rem;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }

  &.active:after {
    width: 100%;
    background: linear-gradient(to right, #fff, rgba(255,255,255,0.8));
  }
`;

const NormalButton = styled(motion.button)`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
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
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const navItems = [
  { name: 'Home', section: 'home' },
  { name: 'Features', section: 'features' },
  { name: 'About', section: 'about' },
  { name: 'Contact', section: 'contact' }
];

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    onNavigate?.(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <NavContainer 
        className={isScrolled ? 'scrolled' : ''}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContent>
          <Logo
            onClick={() => handleNavigation('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BriLux
          </Logo>

          <NavActions>
            <NavLinks className="hidden md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.section}
                  className={activeSection === item.section ? 'active' : ''}
                  onClick={() => handleNavigation(item.section)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </NavLink>
              ))}
            </NavLinks>

            <NormalButton onClick={() => handleNavigation('features')}>
              Explore Now
            </NormalButton>

            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </MobileMenuButton>
          </NavActions>
        </NavContent>
      </NavContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.section}
                className={activeSection === item.section ? 'active' : ''}
                onClick={() => handleNavigation(item.section)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.name}
              </NavLink>
            ))}
            <NormalButton onClick={() => handleNavigation('features')}>
              Explore Now
            </NormalButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}
