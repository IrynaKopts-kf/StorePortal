import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 750px;
  background: ${({ theme: { colors } }) => colors.white};
  padding: 70px 85px;
  margin: 70px auto 40px;
`;

export const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.bootsBlue};
  text-transform: uppercase;
  letter-spacing: 0.23em;
  text-align: center;
  margin-bottom: 40px;
`;

export const FooterLogoWrapper = styled.figure`
  max-width: 90px;
  margin: 0 auto;
`;

export const FooterLogoCaption = styled.figcaption`
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
`;
