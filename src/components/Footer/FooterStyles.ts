import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px clamp(16px, 4vw, 64px);
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgb(59, 40, 33);
  color: rgb(209, 190, 156);
  font-size: clamp(14px, 4vw, 16px);
`;

export const InfoBlock = styled.div``;

export const ItemInfo = styled.p`
  margin-bottom: 0px;
  text-align: end;
`;
