import styled from 'styled-components';

export const SearchInput = styled.input`
  border-radius: 5px;
  padding: 10px 16px;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.grayLightSecondary};
  box-sizing: border-box;
  width: 100%;
  font-family: Boots Sharp;
  font-size: 18px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 13px;
  top: 13px;
  width: 20px;
`;

export const SearchComponent = styled.div`
  height: 48px;
  width: 441px;
  position: relative;
`;
