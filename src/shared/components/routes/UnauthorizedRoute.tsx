import { Redirect, Route } from 'react-router';
import React from 'react';
import { AppRouts } from '../../route-config';
import { selectUser } from '../../../store/selectors';
import { useSelector } from 'react-redux';

export const UnauthorizedRoute = ({ ...props }): JSX.Element => {
  const user = useSelector(selectUser);

  return (
    <Route>
      {
        user ? (
          <Redirect to={AppRouts.HOME} />
        ) : (
          React.createElement(props.component, {})
        )
    }
    </Route>
  );
};
