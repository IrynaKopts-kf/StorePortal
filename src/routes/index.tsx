import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router';
import Layout from 'shared/components/layout';
import HomePage from 'containers/homePage';
import LoginPage from 'containers/loginPage';
import { UnauthorizedRoute } from '../shared/components/routes/UnauthorizedRoute';
import { ProtectedRoute } from '../shared/components/routes/ProtectedRoute';
import { AppRouts } from '../shared/route-config';
import { NotFoundPage } from '../containers/notFoundPage';
import { useDispatch } from 'react-redux';
import { AppActions } from '../actions';
import setUserLoaded = AppActions.setUserLoaded;

export const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if(!!localStorage.getItem('accessToken')) {
      dispatch(setUserLoaded());
    }
  }, []);

  return (
    <Layout>

      <Switch>
        <UnauthorizedRoute exact path={ AppRouts.WELCOME } component={ LoginPage }/>
        <ProtectedRoute exact path={ AppRouts.HOME } component={ HomePage }/>
        <Route path={ AppRouts.NOT_FOUND } component={ NotFoundPage }/>
      </Switch>
    </Layout>
  )
 }
