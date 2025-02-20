import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NormalButton from './NormalButton';
import headerVideo from '../assets/header_video.mp4';

const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #a8a8a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.5rem;
  color: #e0e0e0;
  text-align: center;
  max-width: 800px;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export default function VideoHeader() {
  return (
    <VideoContainer>
      <VideoBackground autoPlay loop muted>
        <source src={headerVideo} type="video/mp4" />
      </VideoBackground>
      <Overlay>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Limitless Smart Lighting
        </Title>
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Transform your space with intelligent lighting solutions
        </Description>
        <ButtonContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <NormalButton onClick={() => console.log('Learn More')}>
            Learn More
          </NormalButton>
          <NormalButton onClick={() => console.log('Get Started')} variant="outlined">
            Get Started
          </NormalButton>
        </ButtonContainer>
      </Overlay>
    </VideoContainer>
  );
}
