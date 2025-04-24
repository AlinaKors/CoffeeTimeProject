import { memo } from 'react';
import { FooterWrapper, InfoBlock, ItemInfo } from './FooterStyles';

export const Footer = memo(() => {
  return (
    <FooterWrapper>
      <InfoBlock itemScope itemType="https://schema.org/CafeOrCoffeeShop">
        <ItemInfo itemProp="name">CoffeeTime ©, 2025</ItemInfo>
        <ItemInfo itemProp="openingHours">Coffee shop opening hours: 10:00 - 02:00</ItemInfo>
      </InfoBlock>
    </FooterWrapper>
  );
});
