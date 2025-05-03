import React from 'react';
import styled, { keyframes } from 'styled-components';
import mascotImage from '../../../public/mascot.png';
import BackgroundImage from './assets/background.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const darken = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const BannerContainer = styled.div`
  background: linear-gradient(to right, #4f004f, #760076, #4f004f);
  background-image: url('/background.png');
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  height: 441px; /* Set a fixed height for all banners */
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeIn} 0.8s ease forwards;
  min-height: 350px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 350px; /* Set a minimum height for mobile */
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    animation: ${darken} 0.8s ease forwards;
  }
`;
const Mascot = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 20px;
  position: relative;
  z-index: 2; /* Ensure mascot appears above the darken effect */
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  z-index: 1; /* Ensure text appears above the darken effect */
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export function WelcomeBanner() {
  return (
    <BannerContainer>
      <Mascot src={mascotImage} alt="Mascot" />
      <TextContainer>
        <Title>Welcome to Sbets Casino</Title>
        <Description>
          Discover a transparent and decentralized casino experience on Solana, where participants can generate income by contributing to a shared liquidity pool.
        </Description>
          CA: TBA!
      </TextContainer>
    </BannerContainer>
  );
}
