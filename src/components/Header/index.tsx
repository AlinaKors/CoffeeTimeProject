import { memo } from 'react';
import Logo from '../../assets/img/logo.png';
import {
  HeaderWrapper,
  CompanyInfo,
  CompanyName,
  CompanyContainer,
  CompanySlogan,
  LogoImg,
} from './HeaderStyles';
import { Contact } from '../Contact';
import { Link } from 'react-router';

export const Header = memo(() => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <CompanyContainer title="Main">
          <LogoImg src={Logo} alt="CoffeeTime" />
          <CompanyInfo>
            <CompanyName>CoffeeTime</CompanyName>
            <CompanySlogan>Best coffee of your life</CompanySlogan>
          </CompanyInfo>
        </CompanyContainer>
      </Link>

      <Contact importantBlock={false} />
    </HeaderWrapper>
  );
});
