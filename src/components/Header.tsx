import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NormalButton from './NormalButton';

const HeaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const H1 = styled(motion.h1)`
  font-family: "Inter";
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  margin-bottom: 1.5rem;

  background: radial-gradient(123.44% 123.44% at 56.63% 100%, #ECECEE 6.77%, rgba(255, 255, 255, 0.45) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const P = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.01em;
  margin-bottom: 2rem;

  background: radial-gradient(123.44% 123.44% at 56.63% 100%, rgba(236, 236, 238, 0.5) 6.77%, rgba(255, 255, 255, 0.225) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FloatingLight = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  pointer-events: none;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <FloatingLight
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: "20%", left: "20%" }}
      />
      <FloatingLight
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ bottom: "20%", right: "20%" }}
      />
      
      <H1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Illuminate Your Space with BriLux
      </H1>
      
      <P
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Experience the perfect blend of style and functionality
      </P>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <NormalButton>Explore Now</NormalButton>
      </motion.div>
    </HeaderContainer>
  );
}
