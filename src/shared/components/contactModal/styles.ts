import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme: { colors } }: any) => colors.grayLightPrimary};
`;

export const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 750px;
  background: ${({ theme: { colors } }: any) => colors.white};
  text-align: center;
  padding: 50px 95px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 20px;
  cursor: pointer;
`;

export const ContactPhoneLink = styled.a`
  font-size: 30px;
  color: ${({ theme: { colors } }) => colors.bootsBlue};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.23em;
`;

export const ContactEmailLinkCaption = styled.p`
  font-size: 24px;
  color: ${({ theme: { colors } }) => colors.bootsBlue};
  margin: 10px 0 30px;
`;

export const ContactEmailLink = styled(ContactEmailLinkCaption)`
  text-decoration: none;
`;
