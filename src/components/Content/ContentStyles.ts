import styled from 'styled-components';

export const Main = styled.main`
  padding: clamp(16px, 2vw, 32px) clamp(16px, 4vw, 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentHeader = styled.h2`
  font-size: clamp(24px, 4vw, 42px);
  text-align: center;
`;

export const ContentContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
  margin-top: 0px;
  padding: 0;
`;
