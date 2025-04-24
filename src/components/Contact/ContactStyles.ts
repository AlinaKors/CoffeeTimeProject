import styled from 'styled-components';

export const ContactBtn = styled.div`
  border-radius: 4px;
  text-align: center;
  padding: 8px 24px;
  position: relative;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  border: 3px solid #d1be9c;
  color: #d1be9c;
  transition: all 0.5s;
  &:hover {
    box-shadow: inset 0 0 0 2em #796761;
    border-color: #796761;
    color: #d1be9c;
  }
`;

export const ContactBtnImportant = styled.div`
  border-radius: 4px;
  text-align: center;
  padding: 8px 24px;
  position: relative;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  color: #5c4943;
  overflow: hidden;
  border: 3px solid #5c4943;
  &::before {
    width: 15%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #5c4943;
    transform: rotateZ(-45deg) translate(-50%, -50%);
    transition: all 0.3s;
    content: '';
  }
  &:hover {
    color: #fff;
    transition-delay: 0.35s;
    &::before {
      animation: animated 0.6s forwards;
      z-index: -1;
    }
  }
  @keyframes animated {
    10% {
      width: 0;
      transform: rotateZ(-45deg) translate(-100%, -50%);
    }
    20% {
      width: 0;
      transform: rotateZ(0) translate(-100%, 85%);
    }
    60% {
      width: 100%;
      transform: rotateZ(0) translate(0, 85%);
    }
    100% {
      width: 100%;
      transform: rotateZ(0) translate(0, 0);
    }
  }
`;
