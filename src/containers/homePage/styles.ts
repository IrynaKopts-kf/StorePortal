import styled from 'styled-components';
import { ButtonPrimary } from '../../shared/styled-components';

export const Wrapper = styled.div`
  padding: 0 91px;
`;

export const ToolBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0 55px;
  padding-right: 32px;
`;

export const Button = styled(ButtonPrimary)`
  height: 48px;
  width: 215px;
  border-radius: 5px;
  padding: 0 20px;
  margin: 0 0 0 20px;
`;

export const OptionalToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 32px;
  margin-bottom: 35px;
`;

export const LinkContainer = styled.div`
  display: flex;
  right: 91px;
  height: 48px;

  img {
    vertical-align: middle;
    height: 22px;
  }
`;

export const Link = styled.button`
  font-family: Boots Sharp;
  font-size: 18px;
  line-height: 27px;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.primary};
  opacity: 0.5;
  margin-left: 40px;
  white-space: nowrap;
`;
