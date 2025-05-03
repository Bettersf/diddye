import React from 'react';
import styled, { keyframes } from 'styled-components';
//import Whitepaper from "../../public/Whitepaper.pdf";

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

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

 & > button {
    border: 2px solid #7211d4; /* Initial border color */
    border-radius: 15px;
    padding: 8px 16px;
    background: #07070935; /* Set background to transparent */
    color: white;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease; /* Smooth transition for background and border color */
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover {
        background: #210892; /* Change background color on hover */
        border-color: #7211d4; /* Change border color to #2323FF on hover */
    }


    @media (max-width: 768px) {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`;

function MainPage() {
  return (
    <CenteredContainer>
      <Buttons>
        <button onClick={() => window.open('https://explorer.gamba.so/platform/BRF9n1dkCh13DqkA2bmx5cwDgbBtkoJkk18gwEzpZ2ur', '_blank')}>
          Explorer
        </button>
        <button onClick={() => window.open(Whitepaper, '_blank')}>
          Whitepaper
        </button> 
        <button onClick={() => window.open('https://www.dextools.io/app/en/solana', '_blank')}>
          Dextools
        </button>
        <button onClick={() => window.open('https://dexscreener.com/solana/', '_blank')}>
          Dex Screener
        </button>
        <button onClick={() => window.open('https://discord.gg/', '_blank')}>
          Discord
        </button>
        <button onClick={() => window.open('https://t.me/', '_blank')}>
          Telegram
        </button>
        <button onClick={() => window.open('https://x.com/', '_blank')}>
          X.com
        </button>
      </Buttons>
    </CenteredContainer>
  );
}

export default MainPage;
