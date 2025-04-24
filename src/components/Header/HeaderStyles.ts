import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotateY(180deg);
      }
      100% {
        transform: rotateY(360deg);
      }
`;

export const HeaderWrapper = styled.header`
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(8px, 2vw, 32px) clamp(16px, 4vw, 64px);
  background: rgb(59, 40, 33);
  color: rgb(209, 190, 156);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  font-size: 1rem;
  border-bottom: 5px solid rgb(121, 103, 97);
  position: fixed;
  flex-wrap: wrap;
  gap: 28px;
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  align-items: flex-start;
  @media (max-width: 520px) {
    display: none;
  }
`;

export const CompanyName = styled.span`
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Cherry Bomb One', system-ui;
`;

export const CompanySlogan = styled.span`
  font-weight: 700;
  text-wrap: nowrap;
`;

export const LogoImg = styled.img`
  animation: ${pulse} 6s ease-in-out infinite;
`;
