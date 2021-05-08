import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import RegistrationsPagesLayout from 'shared/components/registrationsPagesLayout';
import ContactModal from 'shared/components/contactModal';
import { useModal } from 'hooks/useModal';
import LoginForm from './loginForm';
import { StyledLink } from './styles';

const LoginPage = () => {
  const { t } = useTranslation();

  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <RegistrationsPagesLayout title={t(translations.login.mainTitle)}>
        <LoginForm />
        <StyledLink onClick={handleModalOpen}>{t(translations.login.forgotPasswordLink)}</StyledLink>
        {isModalOpen && <ContactModal onClose={handleModalClose} />}
      </RegistrationsPagesLayout>
    </>
  );
};

export default LoginPage;
