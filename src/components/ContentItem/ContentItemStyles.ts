import styled from 'styled-components';

export const ContentItemContainer = styled.li`
  list-style-type: none;
  flex-grow: 1;
  flex: 1 1 33%;
  min-width: 250px;
  padding: 12px 18px;
`;

export const ContentItemTitle = styled.h3`
  font-size: clamp(16px, 4vw, 24px);
  margin-bottom: 8px;
`;

export const ContentItemDesc = styled.p`
  margin: 24px 0px;
  font-size: clamp(14px, 4vw, 16px);
  margin: 0;
`;
