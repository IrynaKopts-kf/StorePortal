import styled from 'styled-components';
import { ButtonPrimary } from '../../styled-components';

export const Header = styled.header`
  background-color: ${({ theme: { colors } }) => colors.generalHealth};
  padding: 15px 30px;
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: 135px;
`;

export const Button = styled(ButtonPrimary)`
  height: 40px;
  width: 137px;
  top: 30px;
  right: 34px;
  padding: 0 20px;
  position: absolute;
  background: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.primary};
  border-radius: 5px;
  color: ${({ theme: { colors } }) => colors.primary};
`;
