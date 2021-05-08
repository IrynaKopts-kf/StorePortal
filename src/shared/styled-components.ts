import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme: { colors } }: any) => {
      return colors.grayLightPrimary;
    }};
  }
`;

export const Input = styled.input<any>(
  ({ invalid, theme: { colors } }) => `
    width: 100%;
    max-width: 450px;
    background: ${colors.grayLightPrimary};
    border: 1px solid ${invalid ? colors.errorRed : colors.grayLightSecondary};
    border-radius: 5px;
    font-size: 18px;
    color: ${colors.bootsBlue};
    padding: 10px 16px;
    outline: none;

    &:-webkit-autofill {
        -webkit-text-fill-color: ${colors.bootsBlue};
    }

    :focus {
        border: 1px solid ${invalid ? colors.errorRed : colors.primary};
    }

    ::placeholder {
        font-weight: 300;
        color: ${colors.gray};
    }
  `
);

export const ValidationError = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.errorRed};
`;

export const ButtonPrimary = styled.button(
  ({ disabled, theme: { colors } }) => `
    display: block;
    width: 100%;
    max-width: 300px;
    color:${colors.white};
    background: ${colors.primary};
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    padding: 10px 20px;
    margin: 0 auto;
    opacity: ${disabled ? '50%' : '100%'};
    cursor: ${disabled ? 'default' : 'pointer'};
  `
);

export const ButtonSecondary = styled(ButtonPrimary)(
  ({ disabled, theme: { colors } }) => `
    color:${colors.primary};
    background: ${colors.white};
    border: 1px solid ${colors.primary};
    opacity: ${disabled ? '50%' : '100%'};
    cursor: ${disabled ? 'default' : 'pointer'};
  `
);
