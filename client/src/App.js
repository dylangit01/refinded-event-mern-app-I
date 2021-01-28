import React from 'react';
import { Container } from "@material-ui/core";
import Navbar from './components/Navbar/Navbar-component'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home-component'
import Auth from './components/Auth/Auth-component'

const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={ Home }/>
          <Route path='/auth' exact component={ Auth }/>
        </Switch>
      </Container>
    </BrowserRouter>
  )
};

export default App;
