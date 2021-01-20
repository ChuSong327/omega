import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import View from './View';

const {
  REACT_APP_EXCELSHEET_HOST: excelHost
} = process.env;

const Excelsheet = ({ history }) => (
  <View name="Excelsheet" host={excelHost} history={history}></View>
)

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path='/'><Redirect to='/excelsheet' /></Route>
          <Route exact path='/excelsheet' component={Excelsheet}></Route>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
