import React from 'react';

export namespace Header {
  export interface Props {
  }
}

export const Header = ({ }: Header.Props): JSX.Element => {

  return (
    <header>
      <h1>Store portal</h1>
    </header>
  );
};
