import styled from 'styled-components';

export const OtherInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(8px, 2vw, 32px) clamp(16px, 4vw, 64px) 120px;
  background-color: #90847d;
`;

export const OtherTitle = styled.h4`
  font-size: clamp(14px, 4vw, 18px);
  text-align: center;
`;
