import styled from 'styled-components';

export const ImportantContainer = styled.div`
  background-color: #4b3621;
  color: rgb(228, 215, 199);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 160px clamp(8px, 2vw, 32px) clamp(16px, 4vw, 64px);
  border-bottom: 3px solid rgb(121, 103, 97);
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ImportantInfo = styled.article`
  text-align: left;
  flex: 1 1 clamp(150px, 50%, 450px);
`;

export const ImportantTitle = styled.h1`
  margin-top: 16px;
  font-size: clamp(32px, 4vw, 56px);
`;

export const ImportantDescription = styled.span`
  font-size: clamp(14px, 5vw, 24px);
  color: rgb(238, 235, 232);
`;

export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  flex: 1 1 clamp(150px, 50%, 450px);

  @supports not (aspect-ratio: 16 / 9) {
    padding-top: 56.25%;
    height: 0;
  }
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }

  img {
    width: clamp(48px, 8vw, 64px);
  }
`;
