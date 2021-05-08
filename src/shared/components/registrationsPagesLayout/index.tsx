import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { Wrapper, MainTitle, FooterLogoWrapper, FooterLogoCaption } from './styles';

interface RegistrationsPagesLayoutProps {
  title: string;
  children: ReactNode;
}

const RegistrationsPagesLayout = ({ title, children }: RegistrationsPagesLayoutProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <MainTitle>{title}</MainTitle>
        {children}
      </Wrapper>
      <footer>
        <FooterLogoWrapper>
          <FooterLogoCaption>{t(translations.registrationsPagesLayout.footerLogoCaption)}</FooterLogoCaption>
          <img src="assets/images/lemonaid_smile_dark_logo.svg" alt="Lemonaid smile logo" />
        </FooterLogoWrapper>
      </footer>
    </>
  );
};

export default RegistrationsPagesLayout;
