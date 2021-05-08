import React, { ReactNode } from 'react';
import { useLocation } from 'react-router';
import { Header, LogoImage, Button } from './styles';
import { useTranslation } from 'react-i18next';
import { GlobalStyle } from 'shared/styled-components';
import { translations } from '../../../locales/i18n';
import { AppRouts } from '../../route-config';
import { useDispatch } from 'react-redux';
import {AppActions} from "../../../actions";
import logOut = AppActions.logOut;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    dispatch(logOut());
  };

  return (
    <>
      <Header>
        <LogoImage src="assets/images/boots_logo.svg" alt="logo" />
        {AppRouts.HOME === location?.pathname ? <Button onClick={handleLogOut}>{t(translations.logOut)}</Button> : <></>}
        <GlobalStyle />
      </Header>
      {children}
    </>
  );
};

export default Layout;
