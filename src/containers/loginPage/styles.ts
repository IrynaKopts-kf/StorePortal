import styled from 'styled-components';

export const StyledLink = styled.a`
  display: block;
  color: ${({ theme: { colors } }) => colors.primary};
  text-decoration: none;
  text-align: center;
  margin-top: 30px;
  cursor: pointer;
`;
