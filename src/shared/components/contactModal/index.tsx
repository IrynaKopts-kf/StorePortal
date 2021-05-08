import React from 'react';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';
import { ButtonSecondary } from 'shared/styled-components';
import { MainTitle } from '../registrationsPagesLayout/styles';
import { Wrapper, CloseIcon, Modal, ContactPhoneLink, ContactEmailLinkCaption, ContactEmailLink } from './styles';

interface ContactModal {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModal): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Modal>
        <CloseIcon src="assets/icons/close.svg" alt="close icon" onClick={onClose} />
        <MainTitle>{t(translations.contactModal.title)}</MainTitle>
        <ContactPhoneLink href="tel:xxxx xxxxxx">xxxx xxxxxx</ContactPhoneLink>
        <ContactEmailLinkCaption>
          {t(translations.contactModal.contactEmailLinkCaption)}{' '}
          <ContactEmailLink as="a" href="mailto:xxxxxx@lemonaid.com">
            xxxxxx@lemonaid.com
          </ContactEmailLink>
        </ContactEmailLinkCaption>
        <ButtonSecondary onClick={onClose}>{t(translations.button.close)}</ButtonSecondary>
      </Modal>
    </Wrapper>
  );
};

export default ContactModal;
